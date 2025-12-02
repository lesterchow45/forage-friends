import React from 'react';

const Gear = () => {
    return (
        <div className="gear-page container section">
            <div className="text-center mb-16">
                <h1>Gear & Merch</h1>
                <p className="subtitle">Curated equipment for your foraging adventures.</p>
            </div>

            <div className="grid grid-cols-3 gap-md">
                {/* Placeholder Items */}
                <div className="gear-card">
                    <div className="gear-image placeholder">
                        <span>Coming Soon</span>
                    </div>
                    <div className="gear-content">
                        <h3>Forager's Basket</h3>
                        <p>$45.00</p>
                    </div>
                </div>
                <div className="gear-card">
                    <div className="gear-image placeholder">
                        <span>Coming Soon</span>
                    </div>
                    <div className="gear-content">
                        <h3>Mushroom Knife</h3>
                        <p>$25.00</p>
                    </div>
                </div>
                <div className="gear-card">
                    <div className="gear-image placeholder">
                        <span>Coming Soon</span>
                    </div>
                    <div className="gear-content">
                        <h3>Field Guide: Pacific NW</h3>
                        <p>$30.00</p>
                    </div>
                </div>
            </div>

            <style>{`
        .gear-page {
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .subtitle {
          color: var(--color-text-light);
          font-size: 1.2rem;
          margin-top: 8px;
        }
        .mb-16 { margin-bottom: 64px; }
        .text-center { text-align: center; }
        
        .gear-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: transform 0.2s;
        }
        .gear-card:hover { transform: translateY(-4px); }
        
        .gear-image {
          height: 250px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-light);
          font-weight: 500;
        }
        .gear-content {
          padding: 24px;
          text-align: center;
        }
        .gear-content h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--color-text);
        }
        .gear-content p {
          color: var(--color-primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default Gear;
