import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { devURL } from '../../../contsants/endPoints';

const fetchMemberProfile = async () => {
  const token = sessionStorage.getItem('token');

  // Make the request using axios
  const response = await axios.get(`${devURL}/member/profile`, {
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

export const useMemberProfile = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['memberProfile'], // Unique key for this query
    queryFn: fetchMemberProfile,  // Function to fetch data
  });
  return {
    isPending: isLoading || isFetching, // Indicates if the query is pending
    error,
    memberProfile: data || null, // Ensures data is null if not available
  }
};


