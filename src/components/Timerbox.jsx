import React,{useState,useEffect} from "react";
import Timer from "./time-counter/Timer";

export default function Timerbox() {
  
  return (
    <div className="timerbox">
      <div className="timebox">
        <ul className="time-button">
          <li>Pomodoro</li>
          <li>Short Break</li>
          <li>Long Break</li>
        </ul>

        <Timer />
      </div>
    </div>
  );
}
