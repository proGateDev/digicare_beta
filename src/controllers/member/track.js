import axios from 'axios';

// Function to update member location
export const updateMemberLocation = async ({ memberId, latitude, longitude }) => {
  const token = sessionStorage.getItem('token');

  // Make the request using axios
  const response = await axios.put(`${devURL}/member/track`, {
    latitude,
    longitude,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Check if the response contains data
  if (response.status !== 200 || !response.data) {
    console.error('Error updating location:', response.data);
    throw new Error(`Failed to update location: ${response.statusText}`);
  }

  return response.data; // Return the response data
};



import { useMutation } from '@tanstack/react-query';
import { devURL } from '../../../contsants/endPoints';

// Custom hook to update member location
export const useUpdateMemberLocation = () => {
  const mutation = useMutation({
    mutationFn: updateMemberLocation, // Function to update location
    onSuccess: (data) => {
      console.log('Location updated successfully:', data);
    },
    onError: (error) => {
      console.error('Error updating location:', error);
    },
  });

  return mutation; // Return mutation object for access in component
};
