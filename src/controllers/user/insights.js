import axios from "axios";
import { devURL } from "../../../contsants/endPoints";
import { useQuery } from "@tanstack/react-query";

export const fetchUserMembersInsights = async (startDate, endDate) => {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(
    `${devURL}/assignment/member/${startDate}/${endDate}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-type": "application/json",
      },
    }
  );

//   console.log("response", response);

  if (response.status !== 200 || !response.data) {
    console.error("Error fetching data:", response.data);
    throw new Error(`Failed to fetch profile data: ${response.statusText}`);
  }

  return response.data;
};

export const useUserProfile = (startDate, endDate) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["userProfile", startDate, endDate], 
    queryFn: () => fetchUserMembersInsights(startDate, endDate),
  });

  return {
    isPending: isLoading || isFetching,
    error,
    userMembersinsights: data || null,
  };
};
