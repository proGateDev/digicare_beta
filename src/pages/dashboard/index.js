import DefaultLayout from '../../component/Layouts/DefaultLayout';
import React from 'react';
import Card from '../../newComponents/admin/card';
import Card2 from '../../newComponents/admin/card2';

function Dashboard() {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap justify-start items-center gap-4 bg-white dark:bg-gray-900">
        {/* Multiple Card components */}
        <Card />
        <Card />
        <Card />
        <Card />
        {/* Uncomment below to add more cards */}
        {/* <Card2 /> 
         <Card2 />
         <Card2 /> 
         <Card2 /> */}
      </div>
    </DefaultLayout>
  );
}

export default Dashboard;
