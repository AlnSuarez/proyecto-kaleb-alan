import React, { useState } from 'react';
import ModalConfig from './ModalConfig';
import Timer from './Timer';
import { Button } from '@mui/material';

function Pomodoro() {
	const [play, setPlay] = useState(false);

	return (
		<>
			<div>Pomodoro</div>
			<Timer play={play}/>
			<ModalConfig />
			<Button value={play} onClick={() => setPlay(!play)}>
				{play ? 'STOP' : 'START'}
			</Button>
		</>
	);
}

export default Pomodoro;
