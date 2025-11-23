import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { fetchTides, getTodayDate, getTomorrowDate } from '../services/tides';
import { fetchWeather } from '../services/weather';

const LocationCard = ({ location }) => {
  const { id, name, region, image, rating, reviews, catch: catchList, toxin_level, status, tide_station_id, weather_grid } = location;
  const [imageError, setImageError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [tideData, setTideData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const { user } = useAuth();

  const isSafe = toxin_level === 'Safe';
  const isOpen = status === 'Open';

  useEffect(() => {
    if (user) {
      checkIfSaved();
    }
  }, [user, id]);

  useEffect(() => {
    const loadData = async () => {
      // Fetch Tides
      if (tide_station_id) {
        const today = getTodayDate();
        const tomorrow = getTomorrowDate();
        const tides = await fetchTides(tide_station_id, today, tomorrow);
        if (tides && tides.length > 0) {
          // Find the next tide
          const now = new Date();
          const nextTide = tides.find(t => new Date(t.t) > now);
          setTideData(nextTide);
        }
      }

      // Fetch Weather
      if (weather_grid) {
        // We need lat/lon to get the grid, but we stored the grid directly.
        // Actually, fetchWeather takes lat/lon.
        // Let's check if we can use the grid directly or if we need to refactor fetchWeather.
        // For now, let's use the coordinates from the location object if available.
        if (location.coordinates) {
          const [lat, lon] = location.coordinates;
          const weather = await fetchWeather(lat, lon);
          if (weather && weather.length > 0) {
            setWeatherData(weather[0]); // Current period
          }
        }
      }
    };

    loadData();
  }, [tide_station_id, location.coordinates]);

  const checkIfSaved = async () => {
    try {
      const { data, error } = await supabase
        .from('saved_locations')
        .select('*')
        .eq('user_id', user.id)
        .eq('location_id', id)
        .single();

      if (data) setIsSaved(true);
    } catch (error) {
      // Ignore error if not found (it just means not saved)
    }
  };

  const toggleSave = async (e) => {
    e.preventDefault(); // Prevent navigation
    if (!user) {
      alert('Please log in to save locations.');
      return;
    }

    if (isSaved) {
      // Unsave
      const { error } = await supabase
        .from('saved_locations')
        .delete()
        .eq('user_id', user.id)
        .eq('location_id', id);

      if (!error) setIsSaved(false);
    } else {
      // Save
      const { error } = await supabase
        .from('saved_locations')
        .insert([{ user_id: user.id, location_id: id }]);

      if (!error) setIsSaved(true);
    }
  };

  return (
    <Link to={`/location/${id}`} className="location-card">
      <div className="card-image-container">
        {!imageError ? (
          <img
            src={image}
            alt={name}
            className="card-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="card-image-fallback">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          </div>
        )}

        <div className="card-badges">
          <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
          <span className={`toxin-badge ${isSafe ? 'safe' : 'unsafe'}`}>
            {isSafe ? 'Safe' : 'Toxin Alert'}
          </span>
          {location.regulations?.permitRequired && (
            <span className="permit-badge">Permit Req.</span>
          )}
        </div>
        <div className="card-favorite-btn" onClick={toggleSave}>
          {isSaved ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-region">{region}</span>
        </div>

        <div className="card-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`star ${i < Math.round(rating) ? 'filled' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.round(rating) ? "var(--color-star)" : "none"} stroke={i < Math.round(rating) ? "var(--color-star)" : "#ccc"} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ))}
          </div>
          <span className="review-count">({reviews})</span>
        </div>

        <div className="card-catch">
          <span className="catch-label">Catch:</span>
          <span className="catch-items">{catchList ? catchList.slice(0, 3).join(", ") : 'N/A'}</span>
        </div>

        {/* Real-time Conditions */}
        {(tideData || weatherData) && (
          <div className="card-conditions">
            {tideData && (
              <div className="condition-item">
                <span className="condition-icon">🌊</span>
                <span className="condition-text">
                  {tideData.type === 'H' ? 'High' : 'Low'} Tide: {new Date(tideData.t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )}
            {weatherData && (
              <div className="condition-item">
                <span className="condition-icon">🌤️</span>
                <span className="condition-text">
                  {weatherData.shortForecast}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .location-card {
          display: block;
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }
        .location-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .card-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .card-image-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e0e0e0;
          color: #999;
        }
        .location-card:hover .card-image {
          transform: scale(1.05);
        }
        .card-badges {
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }
        .status-badge, .toxin-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .status-badge.open { background-color: var(--color-primary); }
        .status-badge.closed { background-color: var(--color-text-light); }
        .toxin-badge.safe { background-color: #2196F3; }
        .toxin-badge.unsafe { background-color: #e53935; }
        .permit-badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            color: white;
            background-color: #FF9800; /* Orange for warning/info */
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .card-favorite-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 2;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-favorite-btn:hover {
          background: white;
          transform: scale(1.1);
        }
        .card-content {
          padding: 16px;
        }
        .card-header {
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 1.1rem;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--color-text);
        }
        .card-region {
          font-size: 0.85rem;
          color: var(--color-text-light);
          display: block;
        }
        .card-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .review-count {
          font-size: 0.85rem;
          color: var(--color-text-light);
        }
        .card-catch {
          font-size: 0.85rem;
          color: var(--color-text);
          display: flex;
          gap: 4px;
          align-items: baseline;
        }
        .catch-label {
          font-weight: 600;
          color: var(--color-text-light);
        }
        .catch-items {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-conditions {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #eee;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .condition-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            color: var(--color-text-light);
        }
        .condition-icon {
            font-size: 1rem;
        }
        .condition-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
      `}</style>
    </Link>
  );
};

export default LocationCard;
