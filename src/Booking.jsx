import React from 'react'
import Doctormap from './Doctormap'
import { useState } from 'react'


function Booking() {
    const [showContent, setShowContent] = useState(false);

  function handleclick(){
     setShowContent(true);
  }
  return (
    <div>

      <h1 className='text-2xl text-teal-700 font-bold text-center pt-10 pb-5 '>Largest Healthcare Network Across Tamil Nadu</h1>
      <p className='pb-10 pt-0 text-center text-teal-900 '>Find best doctors across specialities or hospitals in your city.</p>
      <div className='flex flex-wrap justify-center gap-16'>
      <div className="flex flex-wrap flex-col pb-5 place-self-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
      
          <div class="flex flex-col justify-between p-4 leading-normal">
          <img  src='./public/images/doc.jpg' />
          <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Book Appointment</h1>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'> For hospital & clinical admissions.</p>
          <button className='text-white bg-teal-700 hover:bg-teal-900   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ' onClick={handleclick}>FIND DOCTORS NOW</button>
          </div>
        </div>

        <div className="flex flex-wrap flex-col pb-5 place-self-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
          
          <div class="flex flex-col justify-between p-4 leading-normal">
          <img src='./public/images/med.jpg' width={275}  />
          <h1 className='mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Buy Medicine</h1>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>We got all your health needs covered!</p>
          <button className='text-white bg-teal-700 hover:bg-teal-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>BUY NOW</button>
          </div>
        </div>
        </div>
         

         { showContent && <Doctormap/>}
        
        </div>
        













  
  )
}

export default Booking