import React from 'react';
import { Link } from 'react-router-dom';

const Foraging101 = () => {
  return (
    <div className="foraging-101-page">
      <div className="hero-section">
        <div className="container">
          <h1>Foraging 101</h1>
          <p>Your guide to safe, sustainable, and ethical foraging.</p>
        </div>
      </div>

      <div className="container content-section">

        {/* The Golden Rules */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-12">The Golden Rules</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="info-card">
              <div className="icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Never take more than you need. A good rule of thumb is to harvest less than 10% of what you find in a given patch. Leave the rest for wildlife and regeneration.</p>
            </div>
            <div className="info-card">
              <div className="icon">⚠️</div>
              <h3>Safety First</h3>
              <p>Never eat anything you cannot 100% identify. Use multiple sources for identification. When in doubt, throw it out.</p>
            </div>
            <div className="info-card">
              <div className="icon">⚖️</div>
              <h3>Legality</h3>
              <p>Always check local regulations. Some parks forbid foraging entirely, while others have specific limits or permit requirements.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Safety & Identification */}
        <section className="mb-16">
          <div className="two-col-grid">
            <div className="text-col">
              <h2 className="section-title">Safety & Identification</h2>
              <p className="lead-text">Foraging is rewarding, but it carries risks. Misidentification can be dangerous. Here is how to stay safe.</p>

              <div className="tips-list">
                <div className="tip-item">
                  <h4>❌ The "Universal Edibility Test" is a Myth</h4>
                  <p>There is no single rule (like "if animals eat it, it's safe") that applies to all plants. You must identify each species individually.</p>
                </div>
                <div className="tip-item">
                  <h4>📚 Use Multiple Sources</h4>
                  <p>Cross-reference a local field guide, a trusted app, and expert advice. Never rely on a single photo.</p>
                </div>
                <div className="tip-item">
                  <h4>🍄 Beware of Lookalikes</h4>
                  <p>Many edible species have toxic "doppelgängers". Learn the poisonous lookalikes for every plant you intend to harvest.</p>
                </div>
              </div>
            </div>
            <div className="image-col">
              <img src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&w=800&q=80" alt="Mushroom Identification" className="rounded-image" />
              <p className="caption">Always check the underside of mushrooms for gills, pores, or teeth.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Essential Gear */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-12">Essential Gear</h2>
          <div className="gear-grid">
            <div className="gear-item">
              <div className="gear-icon">🧺</div>
              <h4>Basket or Mesh Bag</h4>
              <p>Allows spores and seeds to fall through as you walk, helping the forest replant itself.</p>
            </div>
            <div className="gear-item">
              <div className="gear-icon">🔪</div>
              <h4>Foraging Knife</h4>
              <p>A small, curved blade (often with a brush) helps you harvest mushrooms cleanly without damaging the mycelium.</p>
            </div>
            <div className="gear-item">
              <div className="gear-icon">📖</div>
              <h4>Field Guide</h4>
              <p>A region-specific book is your best friend. It doesn't run out of battery and works without signal.</p>
            </div>
            <div className="gear-item">
              <div className="gear-icon">🥾</div>
              <h4>Sturdy Boots</h4>
              <p>You'll often be off-trail in wet, uneven terrain. Good footwear is essential for safety.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Seasonal Calendar */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-8">What to Look For</h2>
          <div className="season-grid">
            <div className="season-card spring">
              <h3>Spring</h3>
              <ul>
                <li>Morels</li>
                <li>Fiddleheads</li>
                <li>Nettles</li>
                <li>Wild Garlic</li>
              </ul>
            </div>
            <div className="season-card summer">
              <h3>Summer</h3>
              <ul>
                <li>Berries</li>
                <li>Elderflowers</li>
                <li>Samphire</li>
                <li>Seaweed</li>
              </ul>
            </div>
            <div className="season-card fall">
              <h3>Fall</h3>
              <ul>
                <li>Chanterelles</li>
                <li>Porcini</li>
                <li>Nuts</li>
                <li>Rosehips</li>
              </ul>
            </div>
            <div className="season-card winter">
              <h3>Winter</h3>
              <ul>
                <li>Oysters (Mushroom)</li>
                <li>Winter Chanterelles</li>
                <li>Shellfish</li>
                <li>Truffles</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="cta-section text-center">
          <h2>Ready to start?</h2>
          <p>Explore our database of locations and find your first spot.</p>
          <Link to="/explore" className="btn btn-primary btn-lg">Explore Map</Link>
        </div>

      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504194921103-f8b80c338d4d?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 100px 0;
          text-align: center;
        }
        .hero-section h1 {
          font-size: 3.5rem;
          margin-bottom: 16px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero-section p {
          font-size: 1.5rem;
          opacity: 0.95;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        .content-section {
          padding: 80px 20px;
        }
        
        .section-title {
          font-size: 2rem;
          color: var(--color-text);
          font-weight: 700;
        }
        
        .mb-16 { margin-bottom: 64px; }
        .mb-12 { margin-bottom: 48px; }
        .mb-8 { margin-bottom: 32px; }
        .text-center { text-align: center; }
        
        .divider {
          border: 0;
          height: 1px;
          background: #eee;
          margin: 64px 0;
        }

        /* Info Cards */
        .grid { display: grid; }
        .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .gap-md { gap: 32px; }
        
        .info-card {
          background: white;
          padding: 32px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          text-align: center;
          transition: transform 0.2s;
        }
        .info-card:hover { transform: translateY(-4px); }
        .icon { font-size: 3rem; margin-bottom: 16px; }
        .info-card h3 { margin-bottom: 12px; color: var(--color-primary); font-size: 1.25rem; }
        .info-card p { color: var(--color-text-light); line-height: 1.6; }

        /* Two Col Layout */
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .lead-text {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .tips-list { display: flex; flex-direction: column; gap: 24px; }
        .tip-item h4 { color: var(--color-primary); margin-bottom: 8px; font-size: 1.1rem; }
        .tip-item p { color: var(--color-text-light); margin: 0; }
        .rounded-image {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
        }
        .caption {
          text-align: center;
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-top: 8px;
          font-style: italic;
        }

        /* Gear Grid */
        .gear-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .gear-item {
          text-align: center;
          padding: 24px;
          background: #f9f9f9;
          border-radius: var(--radius-lg);
        }
        .gear-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .gear-item h4 { margin-bottom: 8px; color: var(--color-text); }
        .gear-item p { font-size: 0.9rem; color: var(--color-text-light); }

        /* Season Grid */
        .season-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .season-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          color: white;
          box-shadow: var(--shadow-card);
        }
        .season-card h3 { margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 8px; }
        .season-card ul { list-style: none; padding: 0; }
        .season-card li { margin-bottom: 8px; font-size: 0.95rem; }
        
        .spring { background: #66BB6A; }
        .summer { background: #FFA726; }
        .fall { background: #FF7043; }
        .winter { background: #42A5F5; }

        .cta-section {
          margin-top: 80px;
          background: #f0fdf4;
          padding: 64px;
          border-radius: var(--radius-lg);
        }
        .cta-section h2 { margin-bottom: 16px; }
        .cta-section p { margin-bottom: 32px; font-size: 1.2rem; color: var(--color-text-light); }
        .btn-lg { padding: 16px 48px; font-size: 1.1rem; }

        @media (max-width: 768px) {
          .grid-cols-3, .two-col-grid, .gear-grid, .season-grid {
            grid-template-columns: 1fr;
          }
          .hero-section h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Foraging101;
