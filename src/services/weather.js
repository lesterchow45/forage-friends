import axios from 'axios';

/**
 * Fetch weather forecast for a specific latitude and longitude.
 * NWS API requires two steps:
 * 1. Get the grid points from lat/lon.
 * 2. Get the forecast from the grid points.
 * 
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 */
export const fetchWeather = async (lat, lon) => {
    try {
        // Step 1: Get Grid Point
        // Note: browsers forbid setting the User-Agent header from scripts;
        // the NWS API accepts anonymous browser requests.
        const pointsUrl = `https://api.weather.gov/points/${lat},${lon}`;
        const pointsResponse = await axios.get(pointsUrl);

        if (!pointsResponse.data || !pointsResponse.data.properties) {
            throw new Error('Invalid response from NWS Points API');
        }

        const forecastUrl = pointsResponse.data.properties.forecast;

        // Step 2: Get Forecast
        const forecastResponse = await axios.get(forecastUrl);

        return forecastResponse.data.properties.periods;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};
