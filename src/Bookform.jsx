import React from 'react';

function Bookform({ isOpen, closeModal }) {
    if (!isOpen) return null; 

    return (
        <div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Book an Appointment</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4">
                        
                            <form className="max-w-sm mx-auto mb-4">
                                <label htmlFor="patient-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient's Name</label>
                                <input
                                    type="text"
                                    id="patient-name"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                                    placeholder="Enter your name"
                                />
                            </form>

                       
                            <form className="max-w-sm mx-auto mb-4">
                                <label htmlFor="user-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
                                <input
                                    type="text"
                                    id="user-id"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                                    placeholder="Enter your user ID"
                                />
                            </form>

                            <form className="max-w-sm mx-auto mb-4">
                                <label htmlFor="user-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input
                                    type="text"
                                    id="user-id"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                                    placeholder="Enter your user ID"
                                />
                            </form>


                           
                         
                            <form className="max-w-sm mx-auto mb-4">
                                <label htmlFor="appointment-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Appointment</label>
                                <input
                                    type="date"
                                    id="appointment-date"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                                />
                            </form>

                     
                            <label htmlFor="appointment-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segment of the day</label>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <input
                                        id="forenoon-radio"
                                        type="radio"
                                        value="forenoon"
                                        name="appointment-time"
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="forenoon-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Forenoon</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="afternoon-radio"
                                        type="radio"
                                        value="afternoon"
                                        name="appointment-time"
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="afternoon-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Afternoon</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="evening-radio"
                                        type="radio"
                                        value="evening"
                                        name="appointment-time"
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="evening-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Evening</label>
                                </div>
                            </div>

                 
                            <form className="max-w-sm mx-auto mb-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </form>

                     
                            <div className="flex items-center mb-4">
                                <input
                                    id="checkbox-1"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    I agree to the <a href="#" className="text-teal-600 hover:underline dark:text-teal-500">terms and conditions</a>.
                                </label>
                            </div>
                        </div>

                      
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={closeModal}
                                className="text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                            >
                                Book my appointment
                            </button>
                            <button
                                onClick={closeModal}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookform;
