import './App.css';
import './components/Card.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";
import {useState} from "react";
import {getCards} from "./components/api";

function App() {
    const [cards, setCards] = useState([]);
    return (
    <div className="App">
        <header className="App-header">
          <FilterBar
              setCards={setCards}
          />
          <CardList
              cards={cards}
          />
        </header>
    </div>
  );
}

export default App;
