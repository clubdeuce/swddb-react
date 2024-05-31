import './App.css';
import './components/Card.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";
import {useState} from "react";
import {getCards} from "./components/api";
import StatusBar from "./components/StatusBar";

function App() {
    const [cards, setCards] = useState([]);
    return (
    <div className="App">
        <header className="App-header">
          <FilterBar
              setCards={setCards}
          />
            <StatusBar cards={cards} />
          <CardList
              cards={cards}
          />
        </header>
    </div>
  );
}

export default App;
