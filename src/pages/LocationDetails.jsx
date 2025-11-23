import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { supabase } from '../services/supabaseClient';
import { fetchTides, getTodayDate, getTomorrowDate } from '../services/tides';
import { fetchWeather } from '../services/weather';
import { useAuth } from '../context/AuthContext';
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

const LocationDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tides, setTides] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setLocation(data);

        // Fetch Real-time Data
        if (data) {
          // Tides
          if (data.tide_station_id) {
            const today = getTodayDate();
            const tomorrow = getTomorrowDate();
            const tideData = await fetchTides(data.tide_station_id, today, tomorrow);
            setTides(tideData);
          }

          // Weather
          if (data.coordinates) {
            const [lat, lon] = data.coordinates;
            const weatherData = await fetchWeather(lat, lon);
            setWeather(weatherData);
          }
        }

      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  useEffect(() => {
    if (user && id) {
      checkIfSaved();
    }
  }, [user, id]);

  const checkIfSaved = async () => {
    try {
      const { data } = await supabase
        .from('saved_locations')
        .select('*')
        .eq('user_id', user.id)
        .eq('location_id', id)
        .single();

      if (data) setIsSaved(true);
    } catch (error) {
      // Ignore
    }
  };

  const toggleSave = async () => {
    if (!user) {
      alert('Please log in to save locations.');
      return;
    }

    if (isSaved) {
      const { error } = await supabase
        .from('saved_locations')
        .delete()
        .eq('user_id', user.id)
        .eq('location_id', id);

      if (!error) setIsSaved(false);
    } else {
      const { error } = await supabase
        .from('saved_locations')
        .insert([{ user_id: user.id, location_id: id }]);

      if (!error) setIsSaved(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  if (loading) {
    return <div className="container" style={{ padding: '40px' }}>Loading...</div>;
  }

  if (!location) {
    return <div className="container" style={{ padding: '40px' }}>Location not found</div>;
  }

  const isSafe = location.toxin_level === 'Safe';

  return (
    <div className="location-details-page">
      {/* Header Section - White Background */}
      <div className="location-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/explore">Explore</Link> / {location.region}
          </div>
          <h1>{location.name}</h1>
          <div className="header-meta">
            <div className="rating-row">
              <div className="stars">★★★★★</div>
              <span className="score">{location.rating}</span>
              <span className="count">({location.reviews} reviews)</span>
            </div>
            <span className="separator">•</span>
            <span className={`status-badge ${location.status.toLowerCase()}`}>{location.status}</span>
            <span className="separator">•</span>
            <span className={`toxin-badge ${isSafe ? 'safe' : 'unsafe'}`}>
              {isSafe ? 'Safe' : 'Toxin Alert'}
            </span>
            {location.regulations?.permitRequired && (
              <>
                <span className="separator">•</span>
                <span className="permit-badge">Permit Required</span>
              </>
            )}
            <span className="separator">•</span>
            <span className="meta-text">Best: {location.best_season}</span>
            <span className="separator">•</span>
            <span className="meta-text">Catch: {location.catch ? location.catch.slice(0, 3).join(", ") : 'N/A'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="container">
        <div className="location-hero-container">
          <img src={location.image || "/coastal_hero.png"} alt={location.name} className="hero-image" />
          <button className="photo-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Photos
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container content-grid">
        <div className="main-column">
          {/* Action Bar */}
          <div className="action-bar">
            <button className="action-btn" onClick={handleShare}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              Share
              {showShareToast && <span className="share-toast">Link Copied!</span>}
            </button>
            <button className={`action-btn ${isSaved ? 'active' : ''}`} onClick={toggleSave}>
              {isSaved ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              )}
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>

          <section className="detail-section">
            <p className="description">{location.description}</p>
            <div className="tags">
              {location.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            {location.last_updated && (
              <div className="last-updated">
                Updated: {new Date(location.last_updated).toLocaleDateString()}
              </div>
            )}
          </section>

          <section className="detail-section">
            <h3>Foraging Conditions</h3>

            {/* Tides */}
            {tides && (
              <div className="conditions-block">
                <h4>Tide Schedule (Next 24h)</h4>
                <div className="tide-list">
                  {tides.slice(0, 4).map((tide, idx) => (
                    <div key={idx} className="tide-item">
                      <span className="tide-time">{new Date(tide.t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      <span className={`tide-type ${tide.type === 'H' ? 'high' : 'low'}`}>
                        {tide.type === 'H' ? 'High' : 'Low'}
                      </span>
                      <span className="tide-height">{tide.v} ft</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weather */}
            {weather && (
              <div className="conditions-block" style={{ marginTop: '24px' }}>
                <h4>Weather Forecast</h4>
                <div className="weather-list">
                  {weather.slice(0, 3).map((period, idx) => (
                    <div key={idx} className="weather-item">
                      <div className="weather-header">
                        <span className="weather-name">{period.name}</span>
                        <span className="weather-temp">{period.temperature}°{period.temperatureUnit}</span>
                      </div>
                      <p className="weather-desc">{period.shortForecast}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback Stats if no real-time data */}
            {!tides && !weather && (
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="label">Tidal Status</span>
                  <span className="value">{location.tidal_status}</span>
                </div>
                <div className="stat-item">
                  <span className="label">Toxin Level</span>
                  <span className={`value ${isSafe ? 'text-safe' : 'text-danger'}`}>{location.toxin_level}</span>
                </div>
                <div className="stat-item">
                  <span className="label">Best Season</span>
                  <span className="value">{location.best_season}</span>
                </div>
              </div>
            )}
          </section>

          <section className="detail-section">
            <h3>Primary Catch</h3>
            <div className="catch-grid">
              {location.catch && location.catch.map(item => (
                <div key={item} className="catch-item">
                  <span className="catch-icon">🐟</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h3>Reviews</h3>
            <div className="review-placeholder">
              <div className="user-avatar"></div>
              <div className="review-content">
                <div className="review-header">
                  <span className="user-name">Coastal Forager</span>
                  <span className="review-date">2 days ago</span>
                </div>
                <div className="review-stars">★★★★★</div>
                <p>Found some amazing mussels here at low tide! Just make sure to check the regulations first.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="sidebar-column">
          <div className="mini-map">
            <MapContainer
              center={location.coordinates}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
              dragging={true}
              scrollWheelZoom={true}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={location.coordinates}></Marker>
            </MapContainer>
            <a href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`} target="_blank" rel="noreferrer" className="directions-btn btn btn-primary">
              Get Directions
            </a>
          </div>

          <div className="sidebar-widget">
            <h4>Regulations</h4>
            {location.regulations ? (
              <>
                <p className="text-sm text-muted" style={{ marginBottom: '12px' }}>{location.regulations.text}</p>
                {location.regulations.permitRequired && (
                  <div className="permit-alert" style={{
                    backgroundColor: '#fff3cd',
                    color: '#856404',
                    padding: '8px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    marginBottom: '12px',
                    fontWeight: '600'
                  }}>
                    ⚠️ Permit Required
                  </div>
                )}
                <a href={location.regulations.url} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Check Official Rules
                </a>
              </>
            ) : (
              <>
                <p className="text-sm text-muted">Always check local Fish & Wildlife regulations before harvesting. Permits may be required.</p>
                <button className="btn btn-secondary btn-sm" style={{ marginTop: '16px', width: '100%' }}>Check Regulations</button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .location-details-page {
          background-color: #fff;
          padding-bottom: 80px;
        }
        
        /* Header Section */
        .location-header {
          padding: 24px 0;
          background: white;
        }
        .breadcrumb {
          font-size: 0.85rem;
          color: var(--color-text-light);
          margin-bottom: 12px;
        }
        .breadcrumb a {
          color: var(--color-text-light);
          text-decoration: none;
        }
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        .location-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .header-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.9rem;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .stars {
          color: var(--color-star);
          letter-spacing: -1px;
        }
        .score {
          font-weight: 700;
          color: var(--color-text);
        }
        .count {
          color: var(--color-text-light);
          text-decoration: underline;
          cursor: pointer;
        }
        .separator {
          color: var(--color-border);
        }
        .status-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        .status-badge.open {
          background-color: #e6f4ea;
          color: #1e8e3e;
        }
        .status-badge.closed {
          background-color: #fce8e6;
          color: #d93025;
        }
        .toxin-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
        }
        .toxin-badge.safe {
          background-color: #e3f2fd;
          color: #1976d2;
        }
        .toxin-badge.unsafe {
          background-color: #ffebee;
          color: #c62828;
        }
        .permit-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          background-color: #fff3cd;
          color: #856404;
        }
        .meta-text {
          font-weight: 500;
          color: var(--color-text);
        }

        /* Hero Image */
        .location-hero-container {
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          margin-bottom: 32px;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .photo-btn {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          transition: transform 0.2s;
        }
        .photo-btn:hover {
          transform: scale(1.05);
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 64px;
          align-items: start;
        }
        
        /* Main Column */
        .action-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--color-border);
        }
        .action-btn {
          background: none;
          border: 1px solid var(--color-border);
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--color-text);
          cursor: pointer;
          transition: background 0.2s;
        }
        .action-btn:hover {
          background: var(--color-surface);
        }
        .action-btn.active {
          background: #e3f2fd;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
        .share-toast {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          white-space: nowrap;
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .detail-section {
          margin-bottom: 48px;
        }
        .detail-section h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--color-text);
        }
        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #424242;
          margin-bottom: 24px;
        }
        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .tag {
          background: var(--color-surface);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--color-text-light);
          font-weight: 500;
        }
        .last-updated {
          font-size: 0.85rem;
          color: var(--color-text-light);
          font-style: italic;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          background: var(--color-surface);
          padding: 24px;
          border-radius: var(--radius-lg);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-item .label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-light);
          margin-bottom: 8px;
        }
        .stat-item .value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .text-safe { color: #1976d2; }
        .text-danger { color: #d32f2f; }

        /* Catch Grid */
        .catch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
        }
        .catch-item {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--color-border);
          padding: 16px;
          border-radius: var(--radius-md);
          font-weight: 600;
          transition: border-color 0.2s;
        }
        .catch-item:hover {
          border-color: var(--color-primary);
        }

        /* Sidebar */
        .sidebar-column {
          position: sticky;
          top: 100px;
        }
        .mini-map {
          height: 250px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          margin-bottom: 24px;
          position: relative;
        }
        .directions-btn {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          z-index: 1000;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .sidebar-widget {
          background: var(--color-surface);
          padding: 24px;
          border-radius: var(--radius-lg);
        }
        .sidebar-widget h4 {
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        /* Reviews */
        .review-placeholder {
          display: flex;
          gap: 16px;
          padding: 24px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
        }
        .user-avatar {
          width: 48px;
          height: 48px;
          background: #e0e0e0;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .review-header {
          margin-bottom: 4px;
        }
        .user-name { font-weight: 700; margin-right: 8px; }
        .review-date { color: var(--color-text-light); font-size: 0.9rem; }
        .review-stars { color: var(--color-star); margin-bottom: 8px; letter-spacing: -1px; }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sidebar-column {
            position: static;
          }
          .location-hero-container {
            height: 300px;
          }
          .location-header h1 {
            font-size: 2rem;
          }
        }

        /* Conditions Styles */
        .conditions-block h4 {
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: var(--color-text);
        }
        .tide-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 12px;
        }
        .tide-item {
            background: var(--color-surface);
            padding: 12px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .tide-time { font-weight: 700; color: var(--color-text); }
        .tide-type { font-size: 0.85rem; font-weight: 600; margin: 4px 0; }
        .tide-type.high { color: #1976d2; }
        .tide-type.low { color: #388e3c; }
        .tide-height { font-size: 0.85rem; color: var(--color-text-light); }

        .weather-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 12px;
        }
        .weather-item {
            background: var(--color-surface);
            padding: 12px;
            border-radius: 8px;
        }
        .weather-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-weight: 600;
        }
        .weather-desc {
            font-size: 0.9rem;
            color: var(--color-text-light);
            line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default LocationDetails;
