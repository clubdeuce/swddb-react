import './App.css';
import './components/Card.css';
import CardList from "./components/CardList";
import FilterBar from "./components/FilterBar";
import {useEffect, useState} from "react";
import {find, getCard, getCards, getSet, getSets} from "./components/api";
import StatusBar from "./components/StatusBar";

function App() {
    const [cards, setCards] = useState([]);
    const [cardSet, setCardSet] = useState('all');
    const [rarity, setRarity] = useState('all');
    const [faction, setFaction] = useState('all');
    const [affiliation, setAffiliation] = useState('all');

    useEffect(() => {
        try {
            getCards().then(result => {
                console.log(result);
                setCards(result.data);
            });
        } catch (error) {

        }
    }, [cardSet, rarity, faction, affiliation]);

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
              getSets={getSets}
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
