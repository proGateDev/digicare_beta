import axios from 'axios';
import { devURL } from '../../../contsants/endPoints'; // Ensure the correct path

// Function to update member location
export const getLocationGeocode = async (latitude, longitude) => {
  const token = sessionStorage.getItem('token');

  // Make the request using axios
  const response = await axios.post(`${devURL}/user/track/geocode`, {
    latitude,
    longitude,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Handle potential errors in the response
  if (response.status !== 200 || !response.data) {
    console.error('Error updating location:', response?.data || 'No response data');
    throw new Error(`Failed to update location: ${response?.statusText || 'Unknown error'}`);
  }

  return response.data; // Return the response data
};

// Custom hook to get geocode data based on latitude and longitude
import { useQuery } from '@tanstack/react-query';

export const useGeocode = (latitude, longitude) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['getLocationGeocodeForUser', latitude, longitude], // Pass latitude and longitude as query keys
    queryFn: () => getLocationGeocode(latitude, longitude), // Use arrow function to pass parameters
    enabled: !!latitude && !!longitude, // Only run query if lat and lng are available
  });

  // Returning the expected values
  return {
    isPending: isLoading || isFetching, // Indicates if the query is pending
    error,
    geoLocation: data || null, // Ensures data is null if not available
  };
};
