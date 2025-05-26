import axios from 'axios';

const API_URL = "http://localhost:5000/api/maids"; // Assuming your maids API endpoint

// Fetch maids from the backend with an optional selectedHours filter
export const fetchMaids = async (selectedHours) => {
    try {
        // Make a GET request to the API with selectedHours as a query parameter
        const response = await axios.get(`${API_URL}?selectedHours=${selectedHours}`);
        return response.data; // Return the list of filtered maids
    } catch (error) {
        console.error("Error fetching maids:", error);
        throw error;
    }
};
