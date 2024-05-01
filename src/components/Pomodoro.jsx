import React, { useState } from 'react';
import ModalConfig from './ModalConfig';
import Timer from './Timer';
import { Button } from '@mui/material';
import Counter from './Counter';

function Pomodoro() {
    const [play, setPlay] = useState(false);
    
    return (
        <>
            <div className='bg-light-bg-100 dark:bg-dark-bg-100'>
                <h1>Pomodoro</h1>
                <Timer
                    play={play}
                    setPlay={setPlay}
                />
                <Counter />
                <Button
                    value={play}
                    onClick={() => setPlay(!play)}
                >
                    {play ? 'STOP' : 'START'}
                </Button>
                <ModalConfig />
            </div>
        </>
    );
}

export default Pomodoro;
