import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Find your next adventure</h1>
                <p>Explore thousands of foraging spots and trails across the USA.</p>

                <div className="search-bar">
                    <div className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <input type="text" placeholder="Search by city, park, or trail name" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            <style>{`
        .hero {
          height: 500px;
          background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
          margin-bottom: 40px;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 16px;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 32px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .search-bar {
          background: white;
          padding: 8px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .search-icon {
          padding: 0 16px;
          color: var(--color-text-light);
        }
        .search-bar input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 1rem;
          outline: none;
          font-family: var(--font-main);
        }
        .search-bar button {
          border-radius: var(--radius-full);
          padding: 12px 32px;
        }
        
        @media (max-width: 768px) {
          .hero { height: 400px; }
          .hero-content h1 { font-size: 2.5rem; }
        }
      `}</style>
        </div>
    );
};

export default Hero;
