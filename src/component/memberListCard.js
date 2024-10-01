import { useRouter } from 'next/router';
import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';


const MemberListCard = ({ member, onDelete, onUpdate }) => {
  const router = useRouter();

  const handleRowClick = (memberId) => {
    router.push(`/user/members/details?memberId=${memberId}`)
  }

  return (
    <div
      className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
      {/* Profile Image */}
      <div
            onClick={()=>handleRowClick(member?._id)}

      className="flex items-center space-x-4">
        <img src={member?.imageUrl} alt={member.name} className="w-14 h-14 rounded-full border-2 border-gray-300" />
        <div>
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-gray-500">{member.email}</p>
          <p className="text-sm text-gray-400">ID: {member.employeeId}</p>
        </div>
      </div>

      {/* Status */}
      <div className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${member.status === 'Active' ? 'bg-green-200 text-green-700' : 'bg-rose-200 text-red-700'}`}>
        {member.status}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          onClick={() => onUpdate(member.id)}
        >
          <FaEdit className="w-4 h-4" />
        </button>
        <button
          className="bg-red-500 text-black-2 p-2 rounded-lg shadow-md hover:bg-rose-600 text-white transition-colors"
          onClick={() => onDelete(member.id)}
        >
          <FaTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </div>)

}




export default MemberListCard
