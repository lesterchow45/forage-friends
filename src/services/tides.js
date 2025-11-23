import axios from 'axios';

// NOAA CO-OPS API Endpoint
const BASE_URL = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter';

/**
 * Fetch tide predictions for a specific station.
 * @param {string} stationId - NOAA Station ID (e.g., '9414290' for San Francisco)
 * @param {string} beginDate - Start date in YYYYMMDD format
 * @param {string} endDate - End date in YYYYMMDD format
 */
export const fetchTides = async (stationId, beginDate, endDate) => {
    if (!stationId) {
        console.warn("No station ID provided for tide fetching.");
        return null;
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                station: stationId,
                begin_date: beginDate,
                end_date: endDate,
                product: 'predictions',
                datum: 'MLLW', // Mean Lower Low Water - standard for foraging
                time_zone: 'lst_ldt', // Local Standard/Daylight Time
                units: 'english', // Feet
                interval: 'hilo', // High and Low tides only
                format: 'json',
                application: 'ForageFriends'
            }
        });

        if (response.data && response.data.error) {
            console.error("NOAA API Error:", response.data.error);
            return null;
        }

        return response.data.predictions;
    } catch (error) {
        console.error("Error fetching tide data:", error);
        return null;
    }
};

// TODO: Add a mapping function or object to map app locations (lat/lon) to the nearest NOAA Station ID.
// For now, we will pass the station ID directly from the location data.

// Helper to get today's date in YYYYMMDD
export const getTodayDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    return `${year}${month}${day}`;
};

// Helper to get tomorrow's date in YYYYMMDD
export const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    return `${year}${month}${day}`;
};
