import React,{useEffect,useState} from 'react'

function timer() {
    const prependZero = (number) => {
        if(number<10){
          return "0" + number;
        }
        else {
          return number;
        }
      }
      function secToMin (seconds){
        const min = prependZero(Math.floor(counter/60));
        const sec = prependZero(counter%60);
        return `${min}:${sec}`;
      }
      let counter = 25*60;
      
    const [c,setC] = useState(counter);
    const [timer, setTimer] = useState(secToMin(c));
    const [pause, setPause] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        if(!pause) { //I used '!paused' because I set pause initially to false. 
          if (c > 0) {
            console.log(c);
            setC(c-1);
        const min = prependZero(Math.floor(c/60));
        const sec = prependZero(c%60);
            setTimer(`${min}:${sec}`);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    });
    
    const handlePauseToggle = () => {
      setPause(!pause);
    }
    
     

  return (
    <div>
        <h1 className="time-counter">{timer}</h1>
          <button onClick = {handlePauseToggle}>{(pause ? 'start':'pause')} </button>
    </div>
  )
}

export default timer