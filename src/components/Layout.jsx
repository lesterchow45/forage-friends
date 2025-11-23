import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isHome = location.pathname === '/';

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
            <Link to="/">Forage Friends</Link>
          </div>

          <div className="nav-search">
            <div className="search-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search locations, species..." />
            </div>
          </div>

          <div className="nav-links">
            <Link to="/explore" className="nav-item">Explore</Link>
            <Link to="/saved" className="nav-item">Saved</Link>
            <Link to="/species" className="nav-item">Species</Link>
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
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Forage Friends</h3>
              <p>Connect with nature, find the best spots, and forage safely.</p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/explore">Countries</Link></li>
                <li><Link to="/explore">Regions</Link></li>
                <li><Link to="/explore">Cities</Link></li>
                <li><Link to="/explore">Parks</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Jobs</Link></li>
                <li><Link to="/">Press</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Community</h4>
              <ul>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">Members</Link></li>
                <li><Link to="/">Give Back</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Forage Friends. All rights reserved.</p>
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
