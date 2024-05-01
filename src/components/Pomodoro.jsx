import React, { useState } from 'react';
import ModalConfig from './ModalConfig';
import Timer from './Timer';
import { Button } from '@mui/material';
import Counter from './Counter';

function Pomodoro() {
	const [play, setPlay] = useState(false);

	return (
		<>
			<div>Pomodoro</div>
			<Timer play={play} setPlay={setPlay}/>
			<Counter />
			<ModalConfig />
			<Button value={play} onClick={() => setPlay(!play)}>
				{play ? 'STOP' : 'START'}
			</Button>
		</>
	);
}

export default Pomodoro;
