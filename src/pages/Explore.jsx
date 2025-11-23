import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import LocationCard from '../components/LocationCard';
import { supabase } from '../services/supabaseClient';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map events
const MapEvents = ({ setBounds }) => {
  const map = useMapEvents({
    moveend: () => {
      setBounds(map.getBounds());
    },
    zoomend: () => {
      setBounds(map.getBounds());
    },
    load: () => {
      setBounds(map.getBounds());
    }
  });

  // Set initial bounds
  useEffect(() => {
    if (map) {
      setBounds(map.getBounds());
    }
  }, [map, setBounds]);

  return null;
};

const Explore = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [mapBounds, setMapBounds] = useState(null);
  const markerRefs = useRef({});

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('*');

        if (error) throw error;
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Handle hover effect to open/close popup
  useEffect(() => {
    if (hoveredLocation && markerRefs.current[hoveredLocation]) {
      markerRefs.current[hoveredLocation].openPopup();
    } else {
      // Close all popups when not hovering (or we could track the last one)
      // Since we only open one via hover, we can just close the one that was open if we knew it.
      // But simpler: iterate or just rely on the fact that opening a new one closes the old one.
      // To close when unhovering *everything*, we need to know which one was open.
      // Let's iterate markerRefs to close them is safe enough for this scale, or better:
      // We can't easily know which one is open without tracking.
      // Let's assume the user wants the map to clear when they move mouse away.
      Object.values(markerRefs.current).forEach(marker => marker && marker.closePopup());
    }
  }, [hoveredLocation]);

  const filteredLocations = locations.filter(location => {
    // First apply category filters
    let matchesFilter = true;
    if (activeFilter === 'Safe') matchesFilter = location.toxin_level === 'Safe';
    if (activeFilter === 'Low Tide') matchesFilter = location.tidal_status === 'Low Tide';
    if (activeFilter === 'Open') matchesFilter = location.status === 'Open';

    // Then apply map bounds filter
    let matchesBounds = true;
    if (mapBounds && location.coordinates) {
      const lat = location.coordinates[0];
      const lng = location.coordinates[1];
      matchesBounds = mapBounds.contains([lat, lng]);
    }

    return matchesFilter && matchesBounds;
  });

  return (
    <div className="explore-page">
      <div className="explore-sidebar">
        <div className="sidebar-header">
          <h1>Explore Coast</h1>
          <div className="filters">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === 'Safe' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Safe')}
            >
              Safe (Toxins)
            </button>
            <button
              className={`filter-btn ${activeFilter === 'Low Tide' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Low Tide')}
            >
              Low Tide
            </button>
            <button
              className={`filter-btn ${activeFilter === 'Open' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Open')}
            >
              Open Now
            </button>
          </div>
          <div className="results-count">
            {filteredLocations.length} results in view
          </div>
        </div>
        <div className="locations-list">
          {filteredLocations.length > 0 ? (
            filteredLocations.map(location => (
              <div
                key={location.id}
                className="list-item"
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <LocationCard location={location} />
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No locations found in this area.</p>
              <p>Try zooming out or panning the map.</p>
            </div>
          )}
        </div>
      </div>

      <div className="explore-map">
        <MapContainer
          center={[39.8283, -98.5795]}
          zoom={4}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents setBounds={setMapBounds} />
          {filteredLocations.map(location => (
            <Marker
              key={location.id}
              position={location.coordinates}
              opacity={hoveredLocation === location.id ? 1 : 0.8}
              ref={el => markerRefs.current[location.id] = el}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
              }}
            >
              <Popup>
                <Link to={`/location/${location.id}`} className="map-popup-link">
                  <div className="map-popup">
                    <div className="popup-image-container">
                      <img src={location.image} alt={location.name} className="popup-image" />
                    </div>
                    <h3>{location.name}</h3>
                    <p className="status">{location.status} • {location.toxin_level}</p>
                    <p className="catch">Catch: {location.catch ? location.catch.join(", ") : 'N/A'}</p>
                  </div>
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <style>{`
        .explore-page {
          display: flex;
          height: calc(100vh - var(--header-height));
          overflow: hidden;
        }
        .explore-sidebar {
          width: 45%;
          max-width: 600px;
          background: white;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--color-border);
          z-index: 10;
        }
        .sidebar-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-border);
          background: white;
        }
        .filters {
          display: flex;
          gap: 8px;
          margin-top: 16px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .filter-btn {
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          background: white;
          font-size: 0.9rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          background: var(--color-surface);
        }
        .filter-btn.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
        .results-count {
          margin-top: 12px;
          font-size: 0.85rem;
          color: var(--color-text-light);
        }
        .locations-list {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          align-content: start;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 48px 0;
          color: var(--color-text-light);
        }
        .explore-map {
          flex: 1;
          background: #e0e0e0;
        }
        .map-popup {
          width: 200px;
        }
        .map-popup-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .map-popup-link:hover h3 {
          color: var(--color-primary);
        }
        .popup-image-container {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .map-popup h3 {
          font-size: 1rem;
          margin: 0 0 4px 0;
          font-weight: 700;
          color: var(--color-text);
        }
        .map-popup .status {
          margin: 0 0 4px 0;
          font-size: 0.85rem;
          color: #666;
          font-weight: 600;
        }
        .map-popup .catch {
          margin: 0 0 8px 0;
          font-size: 0.85rem;
          color: var(--color-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        @media (max-width: 768px) {
          .explore-page {
            flex-direction: column;
          }
          .explore-sidebar {
            width: 100%;
            height: 50%;
            max-width: none;
          }
          .explore-map {
            height: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Explore;
