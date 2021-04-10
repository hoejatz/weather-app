import './App.css';
import Wrapper from "./components/Wrapper";
import FetchData from "./components/FetchData/FetchData";

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
        </main>
        <footer>
          Hatzilazaridis Production
        </footer>
      </div>
    </Wrapper>
  );
}

export default App;
