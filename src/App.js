import './App.css';
import './components/Card.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";
import {useState} from "react";
import {getCards} from "./components/api";
import StatusBar from "./components/StatusBar";

function App() {
    const [cards, setCards] = useState([]);
    const [cardSet, setCardSet] = useState(0);
    const [rarity, setRarity] = useState(0);
    const [faction, setFaction] = useState('all');
    const [affiliation, setAffiliation] = useState('all');

    return (
    <div className="App">
        <header className="App-header">
          <FilterBar
              cardsSet={cardSet}
              setCardSet={setCardSet}
              rarity={rarity}
              setRarity={setRarity}
              faction={faction}
              setFaction={setFaction}
              affiliation={affiliation}
              setAffiliation={setAffiliation}
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
