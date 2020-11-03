import logo from './logo.svg';
import './App.css';
import { getData, addWeatherData } from './utils/RestAPI.js';
import WeatherPage from './components/WeatherPage';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div>
      <WeatherPage />
      <div> <Button variant="outline-info" class="" onClick={() => getData("data")}>GET DATA</Button>
        <Button variant="outline-info" onClick={() => addWeatherData("type", "value", "unit", "time", "place", "extras")}>PUT DATA</Button></div>
    </div >
  );
}

export default App;




/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

  </header>
</div> */