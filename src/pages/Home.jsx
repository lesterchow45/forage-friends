import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LocationCard from '../components/LocationCard';
import { getLocations, getGuides } from '../services/dataService';

const Home = () => {
  const [locationName, setLocationName] = useState(null);
  const [featuredLocations, setFeaturedLocations] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Request user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();

            // Extract city or town
            const city = data.address.city || data.address.town || data.address.village || data.address.county;
            if (city) {
              setLocationName(city);
            }
          } catch (error) {
            console.error('Error fetching location name:', error);
          }
        },
        (error) => {
          console.log('Geolocation permission denied or error:', error);
        }
      );
    }

    const fetchData = async () => {
      const [{ data: locationsData }, { data: guidesData }] = await Promise.all([
        getLocations(),
        getGuides()
      ]);
      const sorted = [...(locationsData || [])].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
      setFeaturedLocations(sorted.slice(0, 4));
      setGuides((guidesData || []).slice(0, 3));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Hero />

      <section className="section container">
        <div className="section-header">
          <h2>Trending foraging spots{locationName ? ` near ${locationName}` : ''}</h2>
          <Link to="/explore" className="view-all">View all</Link>
        </div>
        <div className="grid grid-cols-4 gap-md">
          {loading
            ? [...Array(4)].map((_, i) => <div key={i} className="skeleton-card" />)
            : featuredLocations.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
        </div>
      </section>

      <section className="section container know-section">
        <div className="know-banner">
          <div className="know-text">
            <h2>Know before you go</h2>
            <p>Every coastal spot has its own rules — licenses, bag limits, marine protected areas, and biotoxin closures that change weekly. Foraging safely starts with checking the status.</p>
          </div>
          <div className="know-cards">
            <div className="know-card">
              <span className="know-icon">📋</span>
              <h4>Check the regulations</h4>
              <p>Each location page links to the official state rules for that exact spot.</p>
            </div>
            <div className="know-card">
              <span className="know-icon">🌊</span>
              <h4>Watch tides &amp; toxins</h4>
              <p>Live tide schedules and toxin status so you know when it's safe to harvest.</p>
            </div>
            <div className="know-card">
              <span className="know-icon">🌱</span>
              <h4>Harvest sustainably</h4>
              <p>Take less than you find, and leave the habitat as you found it.</p>
            </div>
          </div>
          <Link to="/foraging-101" className="btn btn-primary know-cta">Start with Foraging 101</Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2>Foraging Guides</h2>
          <Link to="/guides" className="view-all">View all</Link>
        </div>
        <div className="grid grid-cols-3 gap-md">
          {guides.map(guide => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="guide-card-link">
              <div className="guide-card">
                <div className="guide-image">
                  <img src={guide.image} alt={guide.title} />
                </div>
                <div className="guide-content">
                  <span className="guide-meta">{guide.read_time} • {guide.author}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .section {
          margin-bottom: 48px;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }
        .view-all {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .view-all:hover {
          text-decoration: underline;
        }

        .skeleton-card {
          height: 340px;
          border-radius: var(--radius-lg);
          background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .know-section {
          margin-top: 64px;
        }
        .know-banner {
          background: linear-gradient(135deg, #f3f8ee 0%, #e8f5e9 100%);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
        }
        .know-text h2 {
          margin-bottom: 12px;
        }
        .know-text p {
          color: var(--color-text-light);
          max-width: 640px;
          margin: 0 auto 32px;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .know-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
          text-align: left;
        }
        .know-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-card);
        }
        .know-icon {
          font-size: 1.75rem;
          display: block;
          margin-bottom: 12px;
        }
        .know-card h4 {
          margin-bottom: 8px;
          font-size: 1.05rem;
        }
        .know-card p {
          color: var(--color-text-light);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .know-banner { padding: 32px 20px; }
          .know-cards { grid-template-columns: 1fr; }
        }

        .guide-card {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .guide-card:hover {
          box-shadow: var(--shadow-md);
        }
        .guide-image {
          height: 200px;
          overflow: hidden;
        }
        .guide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .guide-content {
          padding: 20px;
        }
        .guide-meta {
          font-size: 0.8rem;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }
        .guide-content h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .guide-content p {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
