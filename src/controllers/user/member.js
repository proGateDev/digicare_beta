import axios from 'axios';
import { devURL } from "../../../contsants/endPoints";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Function to fetch user members
export const fetchUserMembers = async () => {
  const token = sessionStorage.getItem('token');

  const response = await axios.get(`${devURL}/user/members/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Check if the response contains data
  if (response.status !== 200 || !response.data) {
    console.error('Error fetching members:', response.data);
    throw new Error(`Failed to fetch members: ${response.statusText}`);
  }

  return response.data; // Return the members data
};

// Function to add a new member
export const addUserMember = async (memberData) => {
  const token = sessionStorage.getItem('token');

  const response = await axios.post(`${devURL}/user/members`, memberData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Check if the response contains data
  if (response.status !== 201 || !response.data) {
    console.error('Error adding member:', response.data);
    throw new Error(`Failed to add member: ${response.statusText}`);
  }

  return response.data; // Return the newly added member data
};

// Custom hook to fetch user members
export const useUserMembers = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['userMembers'],  // Unique key for this query
    queryFn: fetchUserMembers,   // Function to fetch members
  });
let userMembers = data
  return {
    isPending: isLoading || isFetching,
    error,
    userMembers: userMembers || null, // Return null if no data is available
  };
};

// Custom hook to add a member
export const useAddUserMember = () => {
  const queryClient = useQueryClient(); // To manage the cache
  return useMutation({
    mutationFn: addUserMember, // Function to add member
    onSuccess: () => {
      // Invalidate and refetch the members list after a new member is added
      queryClient.invalidateQueries(['userMembers']);
    },
  });
};




//================================
export const fetchUserMembersById = async (memberId) => {
  
  const token = sessionStorage.getItem('token');

  const response = await axios.post(`${devURL}/user/members/member-by-id`,{memberId}, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Check if the response contains data
  if (response.status !== 200 || !response.data) {
    console.error('Error fetching members:', response.data);
    throw new Error(`Failed to fetch members: ${response.statusText}`);
  }
  // console.log(response.data.member, '========response ------- ',);

  return response; // Return the members data
};


export const useUserMembersById = (memberId) => {
  
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['userMembersById'],  // Unique key for this query
    // queryFn: (memberId)=>fetchUserMembersById(memberId),   // Function to fetch members
    queryFn: ()=>fetchUserMembersById(memberId),   // Function to fetch members
  });
// let userMembers = data

  return {
    isPending: isLoading || isFetching,
    error,
    data,
    // memberDetail: userMembers?.member|| null, // Return null if no data is available
  };
};
