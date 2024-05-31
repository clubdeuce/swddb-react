import './App.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>Star Wars&trade; Destiny Card Viewer</h2>
          <FilterBar />
          <CardList />
      </header>
    </div>
  );
}

export default App;
