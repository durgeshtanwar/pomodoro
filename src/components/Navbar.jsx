import React from 'react'
import {VscGraph} from 'react-icons/vsc'
import {FaCog} from 'react-icons/fa'
import {RiUserSettingsLine} from 'react-icons/ri';
import {BsCheckCircle} from 'react-icons/bs';


function Navbar() {
  return (
    <nav>
        <div className="logo"><BsCheckCircle size={22}/> Pomodoro</div>
        <div className="button-group">
            <button className="nav-btn">
               <VscGraph size={15} /> Report
            </button>
            <button className="nav-btn">
              <FaCog siae={15} />  Setting
            </button>
            <button className="nav-btn">
              <RiUserSettingsLine size={15} />  Login
            </button>
        </div>
    </nav>
  )
}

export default Navbar