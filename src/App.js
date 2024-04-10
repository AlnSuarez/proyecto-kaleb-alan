import './App.css';
import Pomodoro from './components/Pomodoro';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>POMODORO TIMER!</h1>
      <Pomodoro />
      <small>By Alan + Kaleb</small>
    </div>
  );
}

export default App;
