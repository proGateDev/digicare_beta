// import axios from "axios";
// import { devURL } from "../../../contsants/endPoints";
// import { useQuery } from "@tanstack/react-query";


// export const adduser = async (userData) =>{
//     console.log('token=========')

//     const token = sessionStorage.getItem('token');


//     const response = await axios.post(`${devURL}/user/auth/signup`,userData, {
//         headers: {
//             Authorization : `Bearer ${token}`,
//             'Content-Type':'application/json'
//         }
//     });

//     console.log('response=====', response)
    
//     if(response.status !== 201 || !response.data) {
//         console.log('Error', response?.data)
//         throw new Error(`Failed to add User: ${response.statusText}`)
//     }
    
//     return response.data
    
// }

// export const addUser = async (userData) =>{

//     console.log('')

//     const {data, error, isLoading, isFeteching }=  useQuery({
//         queryKey:['userData'],
//         queryFn:()=> adduser(userData)
//     })

//     return {
//         isPending : isLoading || isFeteching,
//         error,
//         data
//     }
// }

