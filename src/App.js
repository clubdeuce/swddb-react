import './App.css';
import './components/Card.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";
import {getCard} from "./components/api";

function App() {
    try {
        getCard('01001').then(response => {
            console.log(response);
        });
    } catch (error) {
        console.error(error)
    }

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
