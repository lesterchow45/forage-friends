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
          <Link to="/" className="logo">
            Forage Friends
          </Link>

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
