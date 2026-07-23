import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { seedLocations, seedSpecies, seedGuides } from '../src/data/seedData.js';

// Pushes the bundled seed content into Supabase so the live site serves it
// from the database instead of the in-app fallback.
//   - Rows are matched by name (locations, species) or title (guides).
//   - Missing rows are inserted (without ids — the DB assigns them).
//   - Existing rows only have blank/null columns filled in; manual edits
//     and automation-updated fields (tidal_status etc.) are never overwritten.
// Run with: node scripts/sync_content.js

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const isBlank = (v) => v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0);

async function syncTable(table, seedRows, key) {
    console.log(`\nSyncing ${table}...`);
    const { data: existing, error } = await supabase.from(table).select('*');
    if (error) {
        console.error(`  Could not read ${table}:`, error.message);
        return;
    }

    for (const seed of seedRows) {
        const { id: _seedId, ...fields } = seed;
        const match = existing.find(row => row[key] === seed[key]);

        if (!match) {
            const { error: insertError } = await supabase.from(table).insert([fields]);
            console.log(insertError
                ? `  INSERT failed for "${seed[key]}": ${insertError.message}`
                : `  Inserted "${seed[key]}"`);
            continue;
        }

        const updates = {};
        for (const [col, value] of Object.entries(fields)) {
            if (isBlank(match[col]) && !isBlank(value)) updates[col] = value;
        }
        if (Object.keys(updates).length === 0) {
            console.log(`  "${seed[key]}" already complete`);
            continue;
        }
        const { error: updateError } = await supabase.from(table).update(updates).eq('id', match.id);
        console.log(updateError
            ? `  UPDATE failed for "${seed[key]}": ${updateError.message}`
            : `  Filled ${Object.keys(updates).join(', ')} on "${seed[key]}"`);
    }
}

await syncTable('locations', seedLocations, 'name');
await syncTable('species', seedSpecies, 'name');
await syncTable('guides', seedGuides, 'title');
console.log('\nDone. The live site now serves this content from Supabase.');
