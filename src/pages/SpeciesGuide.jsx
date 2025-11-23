import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

const SpeciesGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const { data, error } = await supabase
          .from('species')
          .select('*');

        if (error) throw error;
        setSpecies(data);
      } catch (error) {
        console.error('Error fetching species:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecies();
  }, []);

  const filteredSpecies = species.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.scientific_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container page-container">
      <div className="page-header">
        <h1>Species Guide</h1>
        <p>Identify edible plants and mushrooms in your area.</p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search species..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-md">
        {filteredSpecies.map(item => (
          <div key={item.id} className="species-card">
            <div className="species-image">
              <img src={item.image} alt={item.name} />
              <span className="season-badge">{item.season}</span>
            </div>
            <div className="species-content">
              <div className="species-header">
                <h3>{item.name}</h3>
                <span className="scientific-name">{item.scientificName}</span>
              </div>

              <div className="species-info">
                <div className="info-row">
                  <span className="label">Edibility:</span>
                  <span className="value">{item.edibility}</span>
                </div>
                <div className="info-row">
                  <span className="label">Habitat:</span>
                  <span className="value">{item.habitat}</span>
                </div>
              </div>

              <p className="species-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .page-container {
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .page-header p {
          color: var(--color-text-light);
          font-size: 1.1rem;
          margin-bottom: 24px;
        }
        .search-container {
          max-width: 500px;
          margin: 0 auto;
        }
        .search-input {
          width: 100%;
          padding: 12px 20px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-light);
        }
        
        .species-card {
          background: white;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        .species-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .species-image {
          height: 240px;
          position: relative;
          overflow: hidden;
        }
        .species-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .season-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .species-content {
          padding: 20px;
        }
        .species-header {
          margin-bottom: 16px;
        }
        .species-header h3 {
          margin-bottom: 2px;
          font-size: 1.25rem;
        }
        .scientific-name {
          font-style: italic;
          color: var(--color-text-light);
          font-size: 0.9rem;
        }
        .species-info {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-surface);
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
          font-size: 0.9rem;
        }
        .label {
          color: var(--color-text-light);
        }
        .value {
          font-weight: 500;
          text-align: right;
        }
        .species-description {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default SpeciesGuide;
