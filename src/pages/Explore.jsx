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

// Dropdown Filter Component
const FilterDropdown = ({ label, options, activeValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <button
        className={`filter-btn ${activeValue !== 'All' ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}: {activeValue === 'All' ? 'Any' : activeValue}
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 6 }}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div
            className={`dropdown-item ${activeValue === 'All' ? 'selected' : ''}`}
            onClick={() => { onChange('All'); setIsOpen(false); }}
          >
            Any
          </div>
          {options.map(option => (
            <div
              key={option}
              className={`dropdown-item ${activeValue === option ? 'selected' : ''}`}
              onClick={() => { onChange(option); setIsOpen(false); }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Explore = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);
  const markerRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  // Filter States
  const [statusFilter, setStatusFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

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
      Object.values(markerRefs.current).forEach(marker => marker && marker.closePopup());
    }
  }, [hoveredLocation]);

  const filteredLocations = locations.filter(location => {
    // Apply Dropdown Filters
    let matchesStatus = statusFilter === 'All' || location.status === statusFilter;
    let matchesSeason = seasonFilter === 'All' || location.best_season === seasonFilter;
    let matchesRating = ratingFilter === 'All' || location.rating >= parseFloat(ratingFilter);

    // Apply Map Bounds Filter
    let matchesBounds = true;
    if (mapBounds && location.coordinates) {
      const lat = location.coordinates[0];
      const lng = location.coordinates[1];
      matchesBounds = mapBounds.contains([lat, lng]);
    }

    return matchesStatus && matchesSeason && matchesRating && matchesBounds;
  });

  return (
    <div className="explore-page">
      {/* Full Screen Map */}
      <div className="explore-map">
        <MapContainer
          center={[38.3, -123.0]} // Centered roughly on Bodega Bay/NorCal coast for demo
          zoom={8}
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
                mouseover: (e) => {
                  hoverTimeoutRef.current = setTimeout(() => {
                    e.target.openPopup();
                  }, 500);
                },
                mouseout: () => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                  }
                }
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

      {/* Floating Sidebar Panel */}
      <div className="floating-sidebar">
        <div className="sidebar-header">
          <h1>Explore Coast</h1>
          <div className="filters-row">
            <FilterDropdown
              label="Status"
              options={['Open', 'Closed']}
              activeValue={statusFilter}
              onChange={setStatusFilter}
            />
            <FilterDropdown
              label="Season"
              options={['Winter', 'Spring', 'Summer', 'Fall']}
              activeValue={seasonFilter}
              onChange={setSeasonFilter}
            />
            <FilterDropdown
              label="Rating"
              options={['4.5', '4.0', '3.5']}
              activeValue={ratingFilter}
              onChange={setRatingFilter}
            />
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
              <p>No locations found.</p>
              <p className="sub-text">Try adjusting filters or moving the map.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .explore-page {
          position: relative;
          height: calc(100vh - var(--header-height));
          overflow: hidden;
          background: #f5f5f5;
        }

        /* Full Screen Map */
        .explore-map {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        /* Floating Sidebar */
        .floating-sidebar {
          position: absolute;
          top: 24px;
          left: 24px;
          bottom: 24px;
          width: 480px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sidebar-header {
          padding: 24px;
          border-bottom: 1px solid var(--color-border);
          background: white;
          z-index: 10;
        }

        .sidebar-header h1 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .filters-row {
          display: flex;
          gap: 8px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 4px;
          /* Hide scrollbar */
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .filters-row::-webkit-scrollbar {
          display: none;
        }

        /* Dropdown Styles */
        .filter-dropdown {
          position: relative;
        }
        
        .filter-btn {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          background: white;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        
        .filter-btn:hover {
          background: #f5f5f5;
          border-color: #ccc;
        }
        
        .filter-btn.active {
          background: #e3f2fd;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          min-width: 160px;
          padding: 8px 0;
          z-index: 1001;
        }

        .dropdown-item {
          padding: 8px 16px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .dropdown-item:hover {
          background: #f5f5f5;
        }

        .dropdown-item.selected {
          color: var(--color-primary);
          font-weight: 600;
          background: #e3f2fd;
        }

        .results-count {
          margin-top: 16px;
          font-size: 0.85rem;
          color: var(--color-text-light);
        }

        /* List */
        .locations-list {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .list-item {
          /* Ensure cards don't stretch weirdly */
        }

        .no-results {
          text-align: center;
          padding: 48px 0;
          color: var(--color-text-light);
        }
        .sub-text {
          font-size: 0.9rem;
          margin-top: 8px;
        }

        /* Map Popup Styles */
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
          .floating-sidebar {
            position: absolute;
            top: auto;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 50vh;
            border-radius: 24px 24px 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Explore;
