import { useState } from 'react'
import Navbar from './components/Navbar'
import Timerbox from './components/Timerbox'
import './App.css'

function App() {
   return <div className="wrapper">
      <Navbar />
      <Timerbox />
   </div>
}

export default App
