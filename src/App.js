import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>POMODORO TIMER!</h1>
      <Timer timeLimit='5'></Timer>
      <small>By Alan + Kaleb</small>
    </div>
  );
}

export default App;
