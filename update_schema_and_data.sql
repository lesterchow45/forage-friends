-- Add new columns for data services
ALTER TABLE locations 
ADD COLUMN IF NOT EXISTS tide_station_id text,
ADD COLUMN IF NOT EXISTS weather_grid jsonb,
ADD COLUMN IF NOT EXISTS regulations jsonb;

-- Update Existing Locations
UPDATE locations 
SET 
    tide_station_id = '9414131',
    weather_grid = '{"id": "MTR", "x": 79, "y": 93}',
    regulations = '{"text": "Pillar Point SMCA: Limited take. Montara SMR: No take. Check MPA boundaries.", "url": "https://wildlife.ca.gov/Conservation/Marine/MPAs", "permitRequired": true}'
WHERE name = 'Half Moon Bay: Pillar Point';

UPDATE locations 
SET 
    tide_station_id = '9415625',
    weather_grid = '{"id": "MTR", "x": 68, "y": 134}',
    regulations = '{"text": "Mussel quarantine May-Oct. Check for domoic acid advisories. Clamming requires license.", "url": "https://www.cdph.ca.gov/Programs/CEH/DRSEM/Pages/EMB/Shellfish/Shellfish-Safety.aspx", "permitRequired": true}'
WHERE name = 'Bodega Bay';

-- Insert New Locations
INSERT INTO locations (name, region, image, rating, reviews, catch, tidal_status, toxin_level, status, best_season, description, coordinates, tags, tide_station_id, weather_grid, regulations)
VALUES
(
    'Fort Bragg: Noyo Harbor',
    'California',
    'https://images.unsplash.com/photo-1605218457336-92748b692929?auto=format&fit=crop&w=800&q=80',
    4.7,
    320,
    ARRAY['Mushrooms', 'Seaweed', 'Urchin'],
    'Variable',
    'Safe',
    'Open',
    'Fall',
    'Gateway to the Mendocino coast. Famous for mushroom foraging in nearby forests and seaweed harvesting.',
    ARRAY[39.4272, -123.8053],
    ARRAY['Mushrooms', 'Forest', 'Seaweed'],
    '9417426',
    '{"id": "EKA", "x": 61, "y": 44}',
    '{"text": "Abalone fishery closed until 2026. Mushroom permits required in Jackson State Forest.", "url": "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing", "permitRequired": true}'
),
(
    'Shelter Cove',
    'California',
    'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80',
    4.8,
    150,
    ARRAY['Rockfish', 'Seaweed'],
    'Low Tide',
    'Caution',
    'Restricted',
    'Summer',
    'Remote ''Lost Coast'' location. rugged beauty and rich marine life.',
    ARRAY[40.0254, -124.0673],
    ARRAY['Remote', 'Rockfish', 'Adventure'],
    '9418024',
    '{"id": "EKA", "x": 58, "y": 73}',
    '{"text": "Dungeness crab closed (Nov 2025). Salmon closed. Check local rockfish regulations.", "url": "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing", "permitRequired": true}'
),
(
    'Monterey Harbor',
    'California',
    'https://images.unsplash.com/photo-1559526324-593bc8142713?auto=format&fit=crop&w=800&q=80',
    4.9,
    2500,
    ARRAY['Jade', 'Kelp'],
    'Moderate',
    'Safe',
    'Restricted',
    'Year-round',
    'Heart of the Marine Sanctuary. Foraging is heavily restricted, but jade collection is allowed in specific zones.',
    ARRAY[36.6022, -121.8894],
    ARRAY['Sanctuary', 'Jade', 'Scenic'],
    '9413450',
    '{"id": "MTR", "x": 93, "y": 50}',
    '{"text": "MBNMS protected. Strict ''no take'' in many areas. Jade collection allowed in designated zones only.", "url": "https://montereybay.noaa.gov/", "permitRequired": false}'
),
(
    'Morro Bay',
    'California',
    'https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=800&q=80',
    4.6,
    600,
    ARRAY['Pismo Clams'],
    'Low Tide',
    'Safe',
    'Restricted',
    'Winter',
    'Iconic rock and bay. Clamming is prohibited in the reserve but allowed in adjacent areas.',
    ARRAY[35.3658, -120.8499],
    ARRAY['Clams', 'Bay', 'Protected'],
    '9412110',
    '{"id": "LOX", "x": 72, "y": 119}',
    '{"text": "Morro Bay SMR/SMRMA prohibits clamming. Pismo clams allowed in adjacent areas with license.", "url": "https://wildlife.ca.gov/Conservation/Marine/MPAs", "permitRequired": true}'
),
(
    'Malibu: Point Dume',
    'California',
    'https://images.unsplash.com/photo-1564686288863-7c87c0628795?auto=format&fit=crop&w=800&q=80',
    4.8,
    1100,
    ARRAY['Finfish'],
    'High Tide',
    'Safe',
    'Restricted',
    'Summer',
    'Beautiful bluffs and beaches. Part of a State Marine Reserve, so take is very limited.',
    ARRAY[34.0011, -118.8066],
    ARRAY['MPA', 'Scenic', 'Hiking'],
    '9410840',
    '{"id": "LOX", "x": 134, "y": 46}',
    '{"text": "Point Dume SMR (No take). SMCA allows limited spearfishing. Check boundaries.", "url": "https://wildlife.ca.gov/Conservation/Marine/MPAs", "permitRequired": true}'
),
(
    'La Jolla: Scripps Pier',
    'California',
    'https://images.unsplash.com/photo-1565896311032-785691497134?auto=format&fit=crop&w=800&q=80',
    5.0,
    3000,
    ARRAY['None'],
    'Low Tide',
    'Safe',
    'Observation Only',
    'Winter',
    'World-famous tide pools. Strictly a ''look, don''t touch'' Ecological Reserve.',
    ARRAY[32.8669, -117.2544],
    ARRAY['Tide Pools', 'Observation', 'Reserve'],
    '9410230',
    '{"id": "SGX", "x": 54, "y": 21}',
    '{"text": "Ecological Reserve. Strict ''No Take'' policy. Do not touch or collect anything.", "url": "https://wildlife.ca.gov/Lands/Places-to-Visit/La-Jolla-Ecological-Reserve", "permitRequired": false}'
);
