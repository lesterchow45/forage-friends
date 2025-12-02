-- Update existing locations to have 'Coastal Foraging' tag
UPDATE locations
SET tags = array_append(tags, 'Coastal Foraging')
WHERE NOT ('Coastal Foraging' = ANY(tags));

-- Add a dummy Land Foraging location for testing
INSERT INTO locations (name, region, image, rating, reviews, catch, tidal_status, toxin_level, status, best_season, description, coordinates, tags)
VALUES
  (
    'Redwood Regional Park',
    'California',
    'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80',
    4.7,
    320,
    ARRAY['Chanterelles', 'Porcini', 'Blackberries'],
    NULL,
    'Safe',
    'Open',
    'Winter',
    'A beautiful redwood forest offering excellent mushroom foraging in the winter months.',
    ARRAY[37.8060, -122.1702],
    ARRAY['Forest', 'Mushrooms', 'Land Foraging']
  );
