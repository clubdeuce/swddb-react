import {useState} from "react";
import SetSelect from "./SetSelect";

const FilterBar = ({cardSet, setCardSet, rarity, setRarity, faction, setFaction, affiliation, setAffiliation, getSets}) => {

    const [sets, setSets] = useState([]);

    const factions = [
        {key: 'All', value: 'All'},
        {key: 'Command', value: 'red'},
        {key: 'Force', value: 'blue'},
        {key: 'Rogue', value: 'yellow'},
        {key: 'General', value: 'grey'},
    ];
    const affiliations = [
        {key: 'All', value: 'all'},
        {key: 'Villain', value: 'villain'},
        {key: 'Hero', value: 'hero'},
        {key: 'Neutral', value: 'neutral'}
    ];
    const rarities = [
        {key: 'All', value: 'all'},
        {key: 'Starter', value: 'S'},
        {key: 'Common', value: 'C'},
        {key: 'Uncommon', value: 'U'},
        {key: 'Rare', value: 'R'},
        {key: 'Legendary', value: "L"}
    ];

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
        <SetSelect
            cardSet={cardSet}
            setCardSet={setCardSet}
        />

        <label htmlFor="faction">Faction:
            <select id='faction' value={faction} onChange={onFactionChange}>
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