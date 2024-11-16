import React from 'react'


function Booking() {
  return (
    <div>

      <h1 className='text-2xl font-bold text-center pt-10 pb-5 '>Largest Healthcare Network Across Tamil Nadu</h1>
      <p className='pb-10 pt-0 text-center '>Find best doctors across specialities or hospitals in your city.</p>
      
      <div className="flex flex-wrap flex-col pb-5 place-self-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <img src='./public/images/doc.jpg' />
          <div class="flex flex-col justify-between p-4 leading-normal">

          <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Book Appointment</h1>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'> For hospital & clinical admissions.</p>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>FIND DOCTORS NOW</button>
          </div>
        </div>
       
        
        </div>
        













  
  )
}

export default Booking