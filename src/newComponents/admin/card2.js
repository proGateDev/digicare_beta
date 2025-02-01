import React, { useEffect, useState } from 'react';
import { devURL } from '../../../contsants/endPoints';
import axios from "axios";
import Swal from "sweetalert2";
import { Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Card() {

  const [users, setUsers] = useState([]);
  const router = useRouter();

  return (
    // 
      <Link href=''>
      <div className="flex flex-col items-center w-50 h-40 bg-white shadow-md rounded-lg p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {/* Icon */}
        <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-2" />

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Compnies</h3>

        <p className="text-xl font-bold text-gray-900 dark:text-gray-300">
          20
        </p>
      </div>
      </Link>
    // 
  );
}