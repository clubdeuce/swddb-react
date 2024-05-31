import {useState} from "react";
import {getSet} from "./api";

const FilterBar = ({setCards}) => {
    const [cardSet, cardSetSet] = useState(0);
    const [rarity, setRarity] = useState(0);
    const [faction, setFaction] = useState('all');
    const [affiliation, setAffiliation] = useState('all');
    const factions = [
        {key: 'Command', value: 'red'},
        {key: 'Force', value: 'blue'},
        {key: 'Rogue', value: 'yellow'},
        {key: 'General', value: 'grey'},
    ];
    const affiliations = [
        {key: 'All', value: 'all'},
        {key: 'Villain', value: 'villain'},
        {key: 'Hero', value: 'hero'},
        {key: 'General', value: 'general'}
    ];
    const rarities = [
        {key: 'All', value: 0},
        {key: 'Starter', value: 1},
        {key: 'Common', value: 2},
        {key: 'Uncommon', value: 3},
        {key: 'Rare', value: 4},
        {key: 'Legendary', value: 5}
    ];

    const onSetChange = (e) => {
        cardSetSet(e.target.value);
        try {
            getSet(e.target.value).then(response => {
                setCards(response.data);
            });
        }
        catch(error) {

        }
    }

    const onRarityChange = (e) => {
        setRarity(e.target.value);
    }

    const onFactionChange = (e) => {
        setFaction(e.target.value);
    }

    const onAffiliationChange = (e) => {
        setAffiliation(e.target.value);
    }

    const renderedRarities = rarities.map((value, index) => {
        return <option key={index} value={value.value}>{value.key}</option>;
    })

    const renderedFactions = factions.map((value, index) => {
        return <option key={index} value={value.value}>{value.key}</option>;
    })

    const renderedAffiliations = affiliations.map((value, index) => {
        return <option key={index} value={value.value}>{value.key}</option>;
    })

    return <div className="filter-bar">
        <label htmlFor="card-set">Set:
            <select id='card-set' className='card-set' value={cardSet} onChange={onSetChange}>
                <option value="0">All</option>
                <option value="AW">Awakenings</option>
                <option value="SOR">Spirit of Rebellion</option>
                <option value="EAW">Empire at War</option>
            </select>
        </label>

        <label htmlFor="faction">Faction:
            <select id='faction' value={faction} onChange={onFactionChange}>
                <option value="all">All</option>
                {renderedFactions}
            </select>
        </label>

        <label htmlFor="faction">Affiliation:
            <select id='faction' value={affiliation} onChange={onAffiliationChange}>
                {renderedAffiliations}
            </select>
        </label>

        <label htmlFor="rarity">Rarity:
            <select id='rarity' className='rarity' value={rarity} onChange={onRarityChange}>
                {renderedRarities}
            </select>
        </label>

    </div>
}

export default FilterBar;