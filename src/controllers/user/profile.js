import axios from 'axios';
import { devURL } from "../../../contsants/endPoints";
import { useQuery } from "@tanstack/react-query";

// Function to fetch user profile data
export const fetchUserProfile = async () => {
  const token = sessionStorage.getItem('token');

  // Make the request using axios
  const response = await axios.get(`${devURL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Check if the response contains data
  if (response.status !== 200 || !response.data) {
    console.error('Error fetching profile data:', response.data);
    throw new Error(`Failed to fetch profile data: ${response.statusText}`);
  }

  return response.data; // Return the profile data
};

// Custom hook to fetch user profile data using React Query
export const useUserProfile = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['userProfile'], // Unique key for this query
    queryFn: fetchUserProfile,  // Function to fetch data
  });

  // Returning the expected values
  return {
    isPending: isLoading || isFetching, // Indicates if the query is pending
    error,
    userProfile: data || null, // Ensures data is null if not available
  };
};
