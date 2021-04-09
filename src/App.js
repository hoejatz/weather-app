import './App.css';
import Wrapper from "./components/Wrapper";
import FetchData from "./components/FetchData/FetchData";
import WeatherList from "./components/WeatherList/WeatherList";
import DayCard from './components/DayCard/DayCard';

function App() {
  return (
    <Wrapper>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <main>
          <FetchData />
          <DayCard
            dt={1602104400 * 1000}
            temp_min="22.67"
            temp_max="24.39"
            main="Clear"
            icon="01d"
          />
        </main>
        <footer>
          Hatzilla Production
        </footer>
      </div>
    </Wrapper>
  );
}

export default App;
