import React from 'react'
import { data } from './Data'
import Doctors from './Doctors'
function Doctormap() {
  return (
    <div  className='flex justify-center flex-wrap m-5'>
        {data.map((datas) => (
              <Doctors 
                 id={datas.id}
                 doctorName = {datas.doctorName}
                 place={datas.place}
                 yearsOfExperience={datas.yearsOfExperience}
                 profession={datas.profession}
              />
        ))}
            
        
    </div>
  )
}

export default Doctormap