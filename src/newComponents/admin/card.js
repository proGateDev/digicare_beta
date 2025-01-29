import React from 'react';
import { ArrowUpCircle } from 'lucide-react'; // Example icon, replace as needed

function Card({ icon: Icon, title, number }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Icon */}
      <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-2" />

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>

      {/* Number */}
      <p className="text-xl font-bold text-gray-900 dark:text-gray-300">{number}</p>
    </div>
  );
}

// Example usage
export default function Example() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card icon={ArrowUpCircle} title="Total Sales" number="1,234" />
    </div>
  );
}
