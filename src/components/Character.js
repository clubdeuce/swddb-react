import CardHeader from "./CardHeader";

function Character({label, affiliation, faction, rarity, points, subtype, health, set}) {
    return <div className="card card--leader">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <p><strong>Character - {subtype.join(' - ')}</strong></p>
            <p>Points: {points}</p>
            <p>Health: {health}</p>
            <p>{set}</p>
        </div>
    </div>
}

export default Character;
