import { Router, useRouter } from "next/router";
import React from "react";


export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">DigiCare4u Login</h1>
        {/* <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-3 hover:bg-blue-600" onClick={()=>router.push('/auth/login')}>
          Login as User
        </button>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600" onClick={()=>router.push('/Admin/Auth/login')}>
          Login as Admin
        </button> */}
      </div>
    </div>
    </>
  );
}

