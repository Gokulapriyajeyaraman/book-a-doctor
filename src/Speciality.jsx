import React from 'react'

function Speciality() {
  return (
    <div>
        <p>Clinic and Specialities</p>
        <div>
            <div className='h-auto w-full'> 
               <img class="rounded-full w-96 h-96" src="./urology.png" />
            </div>
            <div> 
               <img class="rounded-full w-96 h-96" src="./neurology.png" />
            </div>
            <div> 
               <img class="rounded-full w-96 h-96" src="./orthopedic.jpg" />
            </div>
            <div> 
               <img class="rounded-full w-96 h-96" src="./cardiology.png" />
            </div>
            <div> 
               <img class="rounded-full w-96 h-96" src="./consultant.png" />
            </div>
            <div> 
               <img class="rounded-full w-96 h-96" src="./general.png" />
            </div>      
        </div>
    </div>
  )
}

export default Speciality