import { supabase } from './supabaseClient';
import { seedLocations, seedSpecies, seedGuides } from '../data/seedData';

// Supabase-first data access with a bundled-seed fallback, so the site keeps
// working (with a small built-in dataset) when the database is unreachable
// or a table is empty.

const withFallback = async (query, fallback) => {
    try {
        const { data, error } = await query;
        if (error) throw error;
        if (!data || (Array.isArray(data) && data.length === 0)) return { data: fallback, offline: true };
        return { data, offline: false };
    } catch (error) {
        console.warn('Supabase unavailable, using bundled data:', error.message || error);
        return { data: fallback, offline: true };
    }
};

export const getLocations = () =>
    withFallback(supabase.from('locations').select('*'), seedLocations);

export const getLocation = async (id) => {
    const fallback = seedLocations.find(l => String(l.id) === String(id)) || null;
    return withFallback(supabase.from('locations').select('*').eq('id', id).single(), fallback);
};

export const getGuides = () =>
    withFallback(supabase.from('guides').select('*'), seedGuides);

export const getGuide = async (id) => {
    const fallback = seedGuides.find(g => String(g.id) === String(id)) || null;
    return withFallback(supabase.from('guides').select('*').eq('id', id).single(), fallback);
};

export const getSpecies = () =>
    withFallback(supabase.from('species').select('*'), seedSpecies);
