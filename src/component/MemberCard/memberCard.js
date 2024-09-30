import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useRouter } from "next/router";
import Image from "next/image";
import Pagination from "../Pagination/Pagination"; // Import Pagination component

export default function MemberCard({groupDisplay}) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const membersPerPage = 5; // Display 5 members per page
    const { tokenDecoded } = useAuth();
    const token = tokenDecoded();
    const router = useRouter();
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const sosButton = () => {
        alert("This is an emergency");
    };

    // useEffect(() => {
    //     const fetchMembers = async () => {
    //         try {
    //             const token = sessionStorage.getItem('token');
    //             const response = await axios.get('http://192.168.0.172:8000/user/members', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             setMembers(response.data.members);
    //         } catch (err) {
    //             Swal.fire({
    //                 title: "Session expired!",
    //                 text: err?.response?.data?.response,
    //                 icon: "error"
    //             });
    //             router.push('/login');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchMembers();
    // }, []);

    // Calculate the members to display on the current page
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <p>Loading Members...</p>;
    if (error) return <p className="text-red">{error}</p>;

    return (
        <>
            <div className="my-4">
                {currentMembers.map((member) => (
                    <div id="accordion-open" className="shadow-md rounded-lg overflow-hidden my-3" key={member._id}>
                        <h2 id={`accordion-open-heading-${member._id}`}>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-600"
                                onClick={() => toggleAccordion(member._id)} // Toggle based on member ID
                                aria-expanded={openAccordion === member._id}
                                aria-controls={`accordion-open-body-${member._id}`}
                            >
                                <span className="flex justify-between gap-14 items-stretch">
                                    <Image src={'/avatar.png'} alt="member" height={100} width={150} className="" />
                                    <div className="items-start">
                                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                        <p className="p-2 bg-red m-2 rounded text-white"><strong>Role:</strong> {member.role}</p>
                                    </div>
                                    <div className="">
                                        <p className="p-3"><strong>Punch Time :</strong> {member.mobile}</p>
                                       {groupDisplay ? (
                                         <span>Group Display:
                                         <span className={`p-2 rounded-md ${member.locationStatus === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                             {member?.groupType}
                                         </span>
                                     </span>
                                       ) : (
                                        <span>Current Location:
                                        <span className={`p-2 rounded-md ${member.locationStatus === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                            Kanpur
                                        </span>
                                    </span>
                                       )}
                                    </div>
                                    <div>
                                        <button className="bg-rose-600 p-3 rounded-full" onClick={sosButton}>
                                            <h2 className="text-white">S.O.S Emergency</h2>
                                        </button>
                                    </div>
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === member._id ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5L5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        {openAccordion === member._id && (
                            <div
                                id={`accordion-open-body-${member._id}`}
                                className="p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
                                aria-labelledby={`accordion-open-heading-${member._id}`}
                            >
                                <div className="space-y-2">
                                    <p><strong>Email:</strong> {member.email}</p>
                                    <p><strong>Mobile:</strong> {member.mobile}</p>
                                    <p className=""><strong>Group Type:</strong> {member.groupType}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Render Pagination */}
            <Pagination
                membersPerPage={membersPerPage}
                totalMembers={members.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
}
