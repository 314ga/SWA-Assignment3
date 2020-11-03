import logo from './logo.svg';
import './App.css';
import { getData, addWeatherData } from './utils/RestAPI.js';
import './utils/RestAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => getData("data")}>getData</button>
        <button onClick={() => addWeatherData("type","value","unit","time","place", "extras")}>putData</button>
      </header>
    </div>
  );
}

export default App;
