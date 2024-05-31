import logo from './logo.svg';
import './App.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>Star Wars&trade; Destiny Card Viewer</h2>
          <FilterBar />
      </header>
      <CardList />
    </div>
  );
}

export default App;
