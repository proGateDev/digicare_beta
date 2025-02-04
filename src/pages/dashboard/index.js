import DefaultLayout from '../../component/Layouts/DefaultLayout'
import React from 'react'
import Card from '../../newComponents/admin/card'
import Card2 from '../../newComponents/admin/card2'



function dashboard() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center  bg-gray-100 dark:bg-gray-900">
      <Card />
      <Card2/>
      </div>
    </DefaultLayout>
  )
}

export default dashboard