import React, { useState } from 'react'
import Bookform from './Bookform'; 

function Doctors({ id, doctorName, place, yearsOfExperience, profession }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div key={id}>
                <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='h-40 w-40'>
                        <img className="w-full h-full object-cover" src="/images/doctor.png" alt="" />
                    </div>
                    <hr />
                    <div className='flex flex-wrap flex-col justify-start p-5'>
                        <div className="p-5 flex justify-start flex-col">
                            <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">{doctorName}</p>
                            <p className="text-sm">{profession}</p>
                            <div className='m-2'>
                                <p className='text-sm'>Location : {place}</p>
                                <p className='text-sm'>Experience : {yearsOfExperience}</p>
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className="inline-flex justify-around items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 h-10 w-40"
                        >
                            Book Doctor
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

 
            <Bookform isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}

export default Doctors;
