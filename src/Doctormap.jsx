import React from 'react'
import { data } from './Data'
import Doctors from './Doctors'
function Doctormap() {
  return (
    <div  className='flex flex-wrap justify-center'>
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