import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const NAV_LINKS = [
  { to: '/explore', label: 'Explore' },
  { to: '/saved', label: 'Saved' },
  { to: '/guides', label: 'Guides' },
  { to: '/species', label: 'Species' },
  { to: '/foraging-101', label: 'Foraging 101' },
  { to: '/gear', label: 'Gear' },
];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navQuery, setNavQuery] = useState('');
  const isHome = location.pathname === '/';

  const handleNavSearch = (e) => {
    e.preventDefault();
    if (navQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(navQuery.trim())}`);
      setNavQuery('');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="app-container">
      <nav className={`navbar ${isHome ? 'transparent' : ''}`}>
        <div className="container navbar-content">
          <div className="nav-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Forager Path Logo" style={{ height: '56px', width: 'auto', transform: 'scale(1.3)' }} />
              <span style={{ color: 'var(--color-primary)' }}>Forager Path</span>
            </Link>
          </div>

          {!isHome && (
            <div className="nav-search">
              <form className="search-wrapper" onSubmit={handleNavSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input
                  type="text"
                  placeholder="Search spots, regions, catch..."
                  value={navQuery}
                  onChange={(e) => setNavQuery(e.target.value)}
                />
              </form>
            </div>
          )}

          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <Link key={link.to} to={link.to} className="nav-item">{link.label}</Link>
            ))}
            <div className="nav-divider"></div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: isHome ? 'white' : 'inherit', fontSize: '0.9rem' }}>{user.email}</span>
                <button onClick={handleLogout} className="btn btn-secondary btn-sm">Log out</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary btn-sm">Log in</Link>
                <Link to="/signup" className="btn btn-primary btn-sm">Sign up</Link>
              </>
            )}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(link => (
              <Link key={link.to} to={link.to} className="mobile-menu-item" onClick={() => setMenuOpen(false)}>{link.label}</Link>
            ))}
            <div className="mobile-menu-auth">
              {user ? (
                <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="btn btn-secondary">Log out</button>
              ) : (
                <>
                  <Link to="/login" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>Log in</Link>
                  <Link to="/signup" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Sign up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Forager Path</h3>
              <p>Discover coastal foraging spots, check their status, and forage safely — every location with its own regulations, tides, and toxin alerts.</p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/explore">Map & Spots</Link></li>
                <li><Link to="/species">Species Guide</Link></li>
                <li><Link to="/saved">Saved Spots</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><Link to="/foraging-101">Foraging 101</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/gear">Gear</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Stay Safe</h4>
              <ul>
                <li><a href="https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing" target="_blank" rel="noreferrer">CA Regulations</a></li>
                <li><a href="https://wdfw.wa.gov/fishing/shellfishing-regulations" target="_blank" rel="noreferrer">WA Regulations</a></li>
                <li><a href="https://tidesandcurrents.noaa.gov/" target="_blank" rel="noreferrer">NOAA Tides</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Forager Path. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms</Link>
              <Link to="/">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

