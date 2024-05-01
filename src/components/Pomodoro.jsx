import React, { useState } from 'react';
import ModalConfig from './ModalConfig';
import Timer from './Timer';
import Counter from './Counter';
import { Button } from '@nextui-org/react';

function Pomodoro() {
	const [play, setPlay] = useState(false);

	return (
		<>
			<div>Pomodoro</div>
			<Timer play={play} setPlay={setPlay}/>
			<Counter />
			<Button value={play} onClick={() => setPlay(!play)}>
				{play ? 'STOP' : 'START'}
			</Button>
			<ModalConfig />
		</>
	);
}

export default Pomodoro;
