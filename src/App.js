import './App.css';
import React, { useState } from 'react';
import Pomodoro from './components/Pomodoro';
import Timer from './components/Timer';

function App() {
    const [darkOrLight, setDarkOrLight] = useState(false);

    const toggleTheme = () => {
        setDarkOrLight((prevMode) => !prevMode);
    };

    return (
        <div className={`${darkOrLight ? 'dark' : 'light'}`}>
            <button onClick={toggleTheme}>
                {darkOrLight ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            <Pomodoro />
            <small>By Alan + Kaleb</small>
        </div>
    );
}

export default App;
