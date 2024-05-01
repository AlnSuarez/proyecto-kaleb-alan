import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIntervalAction } from '../actions/pomodoroConfigAction';

// Constant of the timer states
const timerStates = {
	focus: 'focus',
	break: 'break',
	largeBreak: 'largeBreak',
};

function Timer({ play, setPlay }) {
	const [time, setTime] = useState(5);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [currentTimer, setCurrentTimer] = useState(timerStates.focus);
	const dispatch = useDispatch();

	// Retrieve Pomodoro config from Redux
	const {
		minutesFocus,
		minutesBreak,
		minutesBreakLarge,
		intervalGoal,
		currentInterval,
		longBreakInterval,
	} = useSelector((state) => state.pomodoroConfigReducer);

	// Function to parse the time
	const parseTime = (time) => {
		setMinutes(parseInt(time / 60));
		setSeconds(time % 60);
	};

	// Handle when the timer ends
	const handleTimerEnds = () => {
		setPlay(!play);

		if (currentTimer === timerStates.focus) {
			if (currentInterval + 1 === intervalGoal) {
				console.log('You finish your sesion goal!');
			} else if ((currentInterval + 1) % longBreakInterval === 0) {
				setCurrentTimer(timerStates.largeBreak);
			} else {
				setCurrentTimer(timerStates.break);
			}
			dispatch(setCurrentIntervalAction());
		} else if (currentTimer === timerStates.break || currentTimer === timerStates.largeBreak) {
			setCurrentTimer(timerStates.focus);
		}
	};

	useEffect(() => {
		parseTime(time);
		if (play) {
			setTimeout(() => {
				time > 0 ? setTime(time - 1) : handleTimerEnds();
			}, 1);
		}
	}, [time, play]);

	useEffect(() => {
		switch (currentTimer) {
			case timerStates.focus:
				setTime(minutesFocus * 60);
				break;
			case timerStates.break:
				setTime(minutesBreak * 60);
				break;
			case timerStates.largeBreak:
				setTime(minutesBreakLarge * 60);
				break;
			default:
				break;
		}
	}, [minutesFocus, minutesBreak, minutesBreakLarge, currentTimer]);

	return (
		<>
			<div style={{ margin: '10px', border: '2px solid black' }}>
				{minutes < 10 && '0'}
				{minutes}:{seconds < 10 && '0'}
				{seconds}
			</div>
		</>
	);
}

export default Timer;
