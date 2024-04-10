import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Timer({ play }) {
  const [time, setTime] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Retrieve Pomodoro config from Redux
  const { minutesFocus } = useSelector((state) => state.pomodoroConfigReducer)

  // Function to parse the time
  const parseTime = (time) => {
    setMinutes(parseInt(time/60));
    setSeconds(time%60);
  }

  useEffect(() => {
    parseTime(time);
    if(play){
      setTimeout(() => {
        time > 0 ? setTime(time-1) : console.log('Termino timer');
      }, 1000);
    }
  }, [time, play]);

  useEffect(() => {
    setTime(minutesFocus*60);
  }, [minutesFocus]);

  return (
    <>
      <div style={{margin: '10px', border: '2px solid black'}}>{minutes < 10 && '0'}{minutes}:{seconds < 10 && '0'}{seconds}</div>
    </>
  )
}

export default Timer