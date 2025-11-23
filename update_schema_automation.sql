-- Add columns for automation
alter table locations 
add column if not exists noaa_station_id text,
add column if not exists weather_summary jsonb,
add column if not exists last_updated timestamp with time zone default timezone('utc'::text, now());

-- Update existing locations with some sample NOAA station IDs (approximate)
-- Half Moon Bay -> Pillar Point Harbor (9414131)
update locations set noaa_station_id = '9414131' where name like 'Half Moon Bay%';

-- Puget Sound -> Seattle (9447130) - approx
update locations set noaa_station_id = '9447130' where name like 'Puget Sound%';

-- Oregon -> Garibaldi (9437540)
update locations set noaa_station_id = '9437540' where name like 'Oregon Coast%';

-- Bodega Bay -> Bodega Harbor (9415601) - approx
update locations set noaa_station_id = '9415601' where name like 'Bodega Bay%';

-- Galveston -> Galveston Pier 21 (8771450)
update locations set noaa_station_id = '8771450' where name like 'Gulf Coast%';

-- Alaska -> Seldovia (9455500)
update locations set noaa_station_id = '9455500' where name like 'Alaska%';

-- Cape Cod -> Boston (8443970) - approx, usually need closer station
update locations set noaa_station_id = '8443970' where name like 'Cape Cod%';

-- Maine -> Bar Harbor (8413320)
update locations set noaa_station_id = '8413320' where name like 'Maine Coast%';
