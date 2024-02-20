"use client"
import React, { useState } from 'react';
import DownloadFoundation from '@/app/component/(attachment)/(download)/DownloadFoundation';
import DownloadComponent from '@/app/component/(attachment)/(download)/DownloadComponent';
import DownloadGetting from '@/app/component/(attachment)/(download)/DownloadGetting';
import DownloadNews from '@/app/component/(attachment)/(download)/DownloadNews';
// import DeleteFoundation from '@/app/component/(attachment)/(delete)/DeleteFoundation';
// import DeleteGetting from '@/app/component/(attachment)/(delete)/DeleteGetting';
// import DeleteComponent from '@/app/component/(attachment)/(delete)/DeleteComponent';
// import DeleteAll from '@/app/component/(attachment)/(delete)/DeleteAll';



const page = () => {
  return (
    <div className='relative max-w-7xl mt-10 mx-auto px-4 focus:outline-none sm:px-3 md:px-5 pb-16'>
      <h1 className=' text-3xl font-bold text-gray-700 my-8'>Attachment</h1>
      
      
      <div className="grid grid-cols-4">

        <div className=" space-y-6">
          <h1 className=' text-xl text-gray-700 font-medium'>Getting Started</h1>
            <DownloadGetting/>
            {/* <DeleteGetting/> */}
        </div>

        <div className="space-y-6">
        <h1 className=' text-xl text-gray-700 font-medium'>Foundation</h1>
            <DownloadFoundation/>
            {/* <DeleteFoundation/> */}
        </div>

        <div className="space-y-6">
        <h1 className=' text-xl text-gray-700 font-medium'>Component</h1>
            <DownloadComponent/>
            {/* <DeleteComponent/> */}
        </div>

        <div className="space-y-6">
        <h1 className=' text-xl text-gray-700 font-medium'>News</h1>
            <DownloadNews/>
            {/* <DeleteComponent/> */}
        </div>

        {/* <div className="space-y-6">
        <h1 className=' text-xl text-gray-700 font-medium'>Delete ALL</h1>
            <DeleteAll/>
        </div> */}

      </div>
    </div>
  )
}

export default page


