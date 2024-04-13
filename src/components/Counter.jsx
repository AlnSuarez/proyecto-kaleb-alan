import React from 'react'
import { useSelector } from 'react-redux';

function Counter() {
  // Retrieve Pomodoro config from Redux
  const { intervalGoal, currentInterval, longBreakInterval } = useSelector((state) => state.pomodoroConfigReducer);

  return (
    <>
      <div> {currentInterval}/{intervalGoal} TOTALES </div>
      <div> {currentInterval%longBreakInterval}/{longBreakInterval} PARA DESCANSO LARGO</div>
    </>
  )
}

export default Counter