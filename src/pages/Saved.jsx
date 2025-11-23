import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { useAuth } from '../context/AuthContext';
import LocationCard from '../components/LocationCard';
import { Link } from 'react-router-dom';

const Saved = () => {
    const [savedLocations, setSavedLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            fetchSavedLocations();
        } else {
            setLoading(false);
        }
    }, [user]);

    const fetchSavedLocations = async () => {
        try {
            const { data, error } = await supabase
                .from('saved_locations')
                .select(`
          location_id,
          locations:location_id (*)
        `)
                .eq('user_id', user.id);

            if (error) throw error;

            // Transform data to get just the location objects
            const locations = data.map(item => item.locations);
            setSavedLocations(locations);
        } catch (error) {
            console.error('Error fetching saved locations:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="container" style={{ padding: '48px 24px', textAlign: 'center' }}>
                <h2>Log in to view saved locations</h2>
                <p style={{ marginBottom: '24px', color: 'var(--color-text-light)' }}>
                    Save your favorite foraging spots to access them quickly.
                </p>
                <Link to="/login" className="btn btn-primary">Log In</Link>
            </div>
        );
    }

    if (loading) {
        return <div className="container" style={{ padding: '48px' }}>Loading...</div>;
    }

    return (
        <div className="container" style={{ padding: '48px 24px' }}>
            <h1 style={{ marginBottom: '32px' }}>Saved Locations</h1>

            {savedLocations.length > 0 ? (
                <div className="grid grid-cols-3 gap-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                    {savedLocations.map(location => (
                        <div key={location.id} style={{ height: '380px' }}>
                            <LocationCard location={location} />
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '48px', background: 'var(--color-surface)', borderRadius: '16px' }}>
                    <h3 style={{ marginBottom: '16px' }}>No saved locations yet</h3>
                    <p style={{ marginBottom: '24px', color: 'var(--color-text-light)' }}>
                        Explore the map and bookmark your favorite spots!
                    </p>
                    <Link to="/explore" className="btn btn-primary">Explore Map</Link>
                </div>
            )}
        </div>
    );
};

export default Saved;
