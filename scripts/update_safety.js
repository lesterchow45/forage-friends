import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// CDPH Marine Biotoxin Monitoring Results - Overview (ArcGIS Feature Service)
// This URL is found by inspecting the network requests on the CDPH map
const CDPH_FEATURE_LAYER = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Marine_Biotoxin_Monitoring_Results_Overview/FeatureServer/0/query';

async function getCaliforniaSafety() {
    try {
        // Query for recent samples (last 30 days is default for the map, but we just want latest)
        // We'll just get everything and filter locally for simplicity in this POC
        const response = await axios.get(CDPH_FEATURE_LAYER, {
            params: {
                where: "1=1",
                outFields: "County,Site_Name,Species,Collection_Date,Domoic_Acid,Paralytic_Shellfish_Poisoning",
                returnGeometry: false,
                f: "json",
                orderByFields: "Collection_Date DESC",
                resultRecordCount: 100
            }
        });

        return response.data.features.map(f => f.attributes);
    } catch (error) {
        console.error('Error fetching CDPH data:', error.message);
        return [];
    }
}

async function updateSafety() {
    console.log('Fetching California safety data...');
    const samples = await getCaliforniaSafety();

    if (samples.length === 0) {
        console.log('No samples found.');
        return;
    }

    console.log(`Found ${samples.length} recent samples.`);

    // Get CA locations
    const { data: locations } = await supabase
        .from('locations')
        .select('id, name, region')
        .eq('region', 'California');

    for (const loc of locations) {
        // Simple fuzzy match: check if location name contains site name or vice versa
        // In reality, you'd want geospatial matching (lat/lng)
        const relevantSamples = samples.filter(s =>
            loc.name.toLowerCase().includes(s.County.toLowerCase()) || // Very rough match by county
            (s.Site_Name && loc.name.toLowerCase().includes(s.Site_Name.toLowerCase()))
        );

        if (relevantSamples.length > 0) {
            // Check latest sample
            const latest = relevantSamples[0];
            console.log(`Match for ${loc.name}: ${latest.Site_Name} (${new Date(latest.Collection_Date).toLocaleDateString()})`);

            let toxinLevel = 'Safe';
            let status = 'Open';

            // CDPH Limits: PSP >= 80 ug/100g, Domoic Acid >= 20 ppm
            if (latest.Paralytic_Shellfish_Poisoning >= 80 || latest.Domoic_Acid >= 20) {
                toxinLevel = 'Unsafe';
                status = 'Closed';
            } else if (latest.Paralytic_Shellfish_Poisoning > 0 || latest.Domoic_Acid > 0) {
                toxinLevel = 'Caution';
            }

            console.log(`  -> New Status: ${status}, Toxin: ${toxinLevel}`);

            const { error } = await supabase
                .from('locations')
                .update({
                    toxin_level: toxinLevel,
                    status: status,
                    last_updated: new Date().toISOString()
                })
                .eq('id', loc.id);

            if (error) console.error('Update failed:', error);
        } else {
            console.log(`No matching samples for ${loc.name}`);
        }
    }
}

updateSafety();
