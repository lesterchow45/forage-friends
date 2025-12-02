import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SpeciesGuide from './pages/SpeciesGuide';
import LocationDetails from './pages/LocationDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Saved from './pages/Saved';
import Guides from './pages/Guides';
import GuideDetails from './pages/GuideDetails';
import Foraging101 from './pages/Foraging101';
import Gear from './pages/Gear';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="species" element={<SpeciesGuide />} />
            <Route path="location/:id" element={<LocationDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="saved" element={<Saved />} />
            <Route path="guides" element={<Guides />} />
            <Route path="guide/:id" element={<GuideDetails />} />
            <Route path="foraging-101" element={<Foraging101 />} />
            <Route path="gear" element={<Gear />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
