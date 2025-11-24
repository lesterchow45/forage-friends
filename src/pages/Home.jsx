import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import LocationCard from '../components/LocationCard';
import { supabase } from '../services/supabaseClient';

const Home = () => {
  const [locationName, setLocationName] = useState('Coastal Spots');
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
      try {
        const { data: locationsData, error: locationsError } = await supabase
          .from('locations')
          .select('*')
          .limit(4);

        if (locationsError) throw locationsError;
        setFeaturedLocations(locationsData);

        const { data: guidesData, error: guidesError } = await supabase
          .from('guides')
          .select('*');

        if (guidesError) throw guidesError;
        setGuides(guidesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container" style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div className="home-page">
      <Hero />

      <section className="section container">
        <div className="section-header">
          <h2>Trending foraging spots near {locationName}</h2>
          <a href="/explore" className="view-all">View all</a>
        </div>
        <div className="grid grid-cols-4 gap-md">
          {featuredLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>

      <section className="section container" style={{ marginTop: '64px' }}>
        <div className="section-header">
          <h2>Foraging Guides</h2>
          <a href="/species" className="view-all">View all</a>
        </div>
        <div className="grid grid-cols-3 gap-md">
          {guides.map(guide => (
            <div key={guide.id} className="guide-card">
              <div className="guide-image">
                <img src={guide.image} alt={guide.title} />
              </div>
              <div className="guide-content">
                <span className="guide-meta">{guide.read_time} • {guide.author}</span>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
              </div>
            </div>
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
          align-items: baseline;
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
