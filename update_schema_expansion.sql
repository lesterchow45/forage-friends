-- Add new columns for massive data expansion
ALTER TABLE locations 
ADD COLUMN IF NOT EXISTS phone_number text,
ADD COLUMN IF NOT EXISTS access_notes text,
ADD COLUMN IF NOT EXISTS is_public_pier boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS last_scraped timestamp with time zone;

-- Comment on columns for clarity
COMMENT ON COLUMN locations.phone_number IS 'Contact number for marinas, parks, or biotoxin hotlines';
COMMENT ON COLUMN locations.access_notes IS 'Specific directions or access details (e.g., "South of Grand Ave")';
COMMENT ON COLUMN locations.is_public_pier IS 'Flag to indicate if no fishing license is required';
COMMENT ON COLUMN locations.last_scraped IS 'Timestamp of the last status check';
