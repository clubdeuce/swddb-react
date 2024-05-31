import CardHeader from "./CardHeader";

const Upgrade = ({label, faction, affiliation, subtype, rarity, cost, set}) => {
    subtype = subtype !== undefined ? subtype : [];
    const renderedSubtypes = subtype.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>Upgrade</li>)

    return <div className="card card--upgrade">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <ul className="card__keywords">
                {renderedSubtypes}
            </ul>
            <p>Cost: {cost}</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Upgrade;
