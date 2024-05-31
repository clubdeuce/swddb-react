import CardHeader from "./CardHeader";

function Character({label, affiliation, faction, rarity, points, subtype, health, set, typeName}) {
    const renderSubtypes = subtype.map((subtype, index) => {
        return <li key={index}>{subtype.name}</li>;
    })

    renderSubtypes.unshift(<li key='0'>{typeName}</li>)

    return <div className="card card--leader">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <ul>{renderSubtypes}</ul>
            <p>Points: {points}</p>
            <p>Health: {health}</p>
            <p>{set}</p>
        </div>
    </div>
}

export default Character;
