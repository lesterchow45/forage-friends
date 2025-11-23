import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
  const { id, name, region, image, rating, reviews, catch: catchList, toxin_level, status } = location;
  const [imageError, setImageError] = useState(false);

  const isSafe = toxin_level === 'Safe';
  const isOpen = status === 'Open';

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
        </div>
        <div className="card-favorite-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
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
      `}</style>
    </Link>
  );
};

export default LocationCard;
