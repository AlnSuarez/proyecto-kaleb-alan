import React from 'react'
import Timer from './Timer'
import ModalConfig from './ModalConfig'

function Pomodoro() {
  return (
    <>
      <div>Pomodoro</div>
      <Timer timeLimit='5'></Timer>
      <ModalConfig/>
    </>
  )
}

export default Pomodoro