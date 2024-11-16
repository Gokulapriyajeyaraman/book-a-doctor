import React from 'react'

function Doctors({id, doctorName, place, yearsOfExperience, profession}) {
    return (
        <div>


            <div key={id}>

                <div className=" max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='h-40 w-40'>
                        <img className="w-full h-full object-cover" src="/images/dentist.png" alt="" />
                    </div>
                    <hr />
                    <div className='flex flex-wrap flex-col justify-start p-5'>
                        <div className="p-5 flex justify-start flex-col">
                            <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">{doctorName}</p>
                            <p classNameName='text-sm'>{profession}</p>
                            <div className='m-2'>
                                <p className='text-sm'>{place}</p>
                                <p className='text-sm'>Experience : {yearsOfExperience}</p>
                            </div>
                        </div>

                        <a href="#" className="inline-flex justify-around items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-10 w-40">
                            Book Doctor
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
      
            </div>
            


    </div >
  )
}

export default Doctors