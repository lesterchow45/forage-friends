import { supabase } from './supabaseClient';
import { seedLocations, seedSpecies, seedGuides } from '../data/seedData';

// Data access that combines Supabase with the bundled seed content:
// - If Supabase errors or a table is empty, the seed data is served alone.
// - Otherwise DB rows win, seed rows fill in any missing fields on rows with
//   the same name/title, and seed-only rows are appended so bundled content
//   (extra spots, species, full guide articles) shows up even before it has
//   been synced into the database (see scripts/sync_content.js).
// Seed-only rows use ids >= 1000 to stay clear of the DB's identity range.

const isBlank = (v) => v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0);

const fillGaps = (dbRow, seedRow) => {
    if (!seedRow) return dbRow;
    const filled = { ...dbRow };
    for (const [key, value] of Object.entries(seedRow)) {
        if (key !== 'id' && isBlank(filled[key])) filled[key] = value;
    }
    return filled;
};

const mergeRows = (dbRows, seedRows, key) => {
    const dbKeys = new Set(dbRows.map(r => r[key]));
    const merged = dbRows.map(r => fillGaps(r, seedRows.find(s => s[key] === r[key])));
    return [...merged, ...seedRows.filter(s => !dbKeys.has(s[key]))];
};

const listWithSeed = async (table, seedRows, key) => {
    try {
        const { data, error } = await supabase.from(table).select('*');
        if (error) throw error;
        if (!data || data.length === 0) return { data: seedRows, offline: true };
        return { data: mergeRows(data, seedRows, key), offline: false };
    } catch (error) {
        console.warn(`Supabase unavailable for ${table}, using bundled data:`, error.message || error);
        return { data: seedRows, offline: true };
    }
};

const singleWithSeed = async (table, id, seedRows, key) => {
    const seedById = seedRows.find(r => String(r.id) === String(id)) || null;
    try {
        const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
        if (error) throw error;
        if (!data) return { data: seedById, offline: true };
        return { data: fillGaps(data, seedRows.find(s => s[key] === data[key])), offline: false };
    } catch (error) {
        console.warn(`Supabase unavailable for ${table}/${id}, using bundled data:`, error.message || error);
        return { data: seedById, offline: true };
    }
};

export const getLocations = () => listWithSeed('locations', seedLocations, 'name');
export const getLocation = (id) => singleWithSeed('locations', id, seedLocations, 'name');

export const getGuides = () => listWithSeed('guides', seedGuides, 'title');
export const getGuide = (id) => singleWithSeed('guides', id, seedGuides, 'title');

export const getSpecies = () => listWithSeed('species', seedSpecies, 'name');
