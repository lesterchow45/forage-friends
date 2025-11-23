import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; // Ideally use SERVICE_ROLE key for backend scripts, but ANON works if RLS allows or for dev

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getTideData(stationId) {
    // NOAA CO-OPS API
    // Product: water_level, Datum: MLLW, Units: english, Time Zone: gmt, Format: json
    // We want predictions for "now"
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD

    try {
        const response = await axios.get('https://api.tidesandcurrents.noaa.gov/api/prod/datagetter', {
            params: {
                product: 'predictions',
                application: 'ForageFriends',
                begin_date: dateStr,
                range: '24', // 24 hours
                station: stationId,
                datum: 'MLLW',
                units: 'english',
                time_zone: 'lst_ldt', // Local Standard/Daylight Time
                format: 'json',
                interval: 'hilo' // Only High/Low
            }
        });

        if (response.data.error) {
            console.error(`NOAA API Error for ${stationId}:`, response.data.error);
            return null;
        }

        return response.data.predictions;
    } catch (error) {
        console.error(`Error fetching tides for ${stationId}:`, error.message);
        return null;
    }
}

function determineTidalStatus(predictions) {
    if (!predictions || predictions.length === 0) return 'Unknown';

    const now = new Date();
    // Find the next tide event
    const nextTide = predictions.find(p => new Date(p.t) > now);

    if (!nextTide) return 'Unknown';

    const isHigh = nextTide.type === 'H';
    const timeDiffHours = (new Date(nextTide.t) - now) / (1000 * 60 * 60);

    if (timeDiffHours < 1) {
        return isHigh ? 'High Tide' : 'Low Tide';
    } else {
        return isHigh ? 'Rising' : 'Falling';
    }
}

async function updateLocations() {
    console.log('Fetching locations...');
    const { data: locations, error } = await supabase
        .from('locations')
        .select('id, name, noaa_station_id')
        .not('noaa_station_id', 'is', null);

    if (error) {
        console.error('Supabase error:', error);
        return;
    }

    console.log(`Found ${locations.length} locations with NOAA stations.`);

    for (const loc of locations) {
        console.log(`Updating ${loc.name} (${loc.noaa_station_id})...`);
        const predictions = await getTideData(loc.noaa_station_id);

        if (predictions) {
            const status = determineTidalStatus(predictions);
            console.log(`  -> Status: ${status}`);

            const { error: updateError } = await supabase
                .from('locations')
                .update({
                    tidal_status: status,
                    last_updated: new Date().toISOString()
                })
                .eq('id', loc.id);

            if (updateError) console.error(`  -> Update failed:`, updateError);
        }
    }
    console.log('Done.');
}

updateLocations();
