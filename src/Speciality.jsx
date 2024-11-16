import React from 'react'

function Speciality() {
    return (
        <div className='flex justify-center items-center flex-col m-5'>
            <p className='text-teal-700 text-2xl font-bold md:text-4xl'>Clinic and Specialities</p>
            <p className='text-1xl text-teal-900 p-5'>Find experienced doctors across all specialties</p>
            <div className='w-full flex justify-evenly flex-wrap'>
               <div>
               <div className='h-40 w-40 m-3 border border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/urology.png" alt="Urology" />
                </div>
                <div>
                    <p className='text-black text-sm font-bold text-center m-6'>UROLOGY</p>
                </div>
               </div>
               

               <div>
               <div className='h-40 w-40 m-3 border border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/neurology.png" alt="Neurology" />
                </div>
                <div>
                   <p className='text-black font-bold text-center text-sm m-6 '>NEUROLOGY</p>
                </div>
               </div>
                <div>
                   <div className='h-40 w-40 m-3 border border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/orthopedic.jpg" alt="Orthopedic" />
                   </div>
                <div>
                <p className='text-black-700 text-sm text-center font-bold m-6 '>ORTHOPEDIC</p>
                </div>
                </div>
               <div>
               <div className='h-40 w-40 m-3 border border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/cardiology.png" alt="Cardiology" />
                </div>
                <div>
                  <p className='text-black-700 font-bold text-sm text-center m-6 '>CARDIOLOGY</p>
                </div>
               </div>
                <div>
                <div className='h-40 w-40 m-3 border  border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/consultant.png" alt="Consultant" />
                </div>
                <div>
                   <p className='text-black-700 text-center font-bold text-sm m-6 '>CONSULTANT PHYSICIAN</p>
                </div>
                </div>
                

                <div>
                <div className='h-40 w-40 m-3 border border-solid border-teal-500 text-center text-sm shadow-lg shadow-teal-500 rounded-full overflow-hidden'>
                    <img className="h-full w-full object-cover" src="/images/physician.png" alt="Consultant" />
                </div>
                <div>
                   <p className='text-black-700 text-center font-bold text-sm m-6 '>GENERAL PHYSICIAN</p>
                </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Speciality;

