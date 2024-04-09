import React, { useEffect, useState } from 'react'

function Timer({ timeLimit }) {
  const [time, setTime] = useState(timeLimit);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Function to parse the time
  const parseTime = (time) => {
    setMinutes(parseInt(time/60));
    setSeconds(time%60);
  }

  useEffect(() => {
    parseTime(time);

    setTimeout(() => {
      time > 0 ? setTime(time-1) : console.log('Termino timer');
    }, 1000);
  }, [time]);

  return (
    <>
      <div style={{margin: '10px', border: '2px solid black'}}>{minutes < 10 && '0'}{minutes}:{seconds < 10 && '0'}{seconds}</div>
    </>
  )
}

export default Timer