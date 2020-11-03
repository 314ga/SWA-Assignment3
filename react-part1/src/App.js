import logo from './logo.svg';
import './App.css';
import './components/RestAPI';
import RestAPI from './components/RestAPI';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <RestAPI/>
      </header>
    </div>
  );
}

export default App;
