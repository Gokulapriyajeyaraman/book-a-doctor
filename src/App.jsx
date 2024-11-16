import React from 'react'
import './App.css'
import Speciality from './Speciality'
import Navbar from './Navbar'
import Doctormap from './Doctormap'
import Booking from './Booking'

function App() {
  return (
    <div>
      <Navbar/>
      <Booking />
      <Speciality />
      <Doctormap/>
    </div>
  )
}

export default App

