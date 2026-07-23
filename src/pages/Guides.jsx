import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGuides } from '../services/dataService';

const Guides = () => {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGuides = async () => {
            const { data } = await getGuides();
            setGuides(data || []);
            setLoading(false);
        };

        fetchGuides();
    }, []);

    if (loading) {
        return <div className="container" style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <div className="guides-page container section">
            <div className="section-header">
                <h1>Foraging Guides</h1>
                <p className="subtitle">Learn the basics, safety tips, and recipes.</p>
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

            <style>{`
        .guides-page {
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .subtitle {
          color: var(--color-text-light);
          margin-top: 8px;
          font-size: 1.1rem;
        }
        .guide-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .guide-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .guide-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .guide-image {
          height: 200px;
          overflow: hidden;
        }
        .guide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .guide-card:hover .guide-image img {
          transform: scale(1.05);
        }
        .guide-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .guide-meta {
          font-size: 0.85rem;
          color: var(--color-text-light);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .guide-content h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--color-text);
          line-height: 1.4;
        }
        .guide-content p {
          color: var(--color-text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default Guides;
