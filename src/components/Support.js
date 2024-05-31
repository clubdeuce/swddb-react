import CardHeader from "./CardHeader";

function Support({name, affiliation_name, faction_name, rarity_name, set, cost, subtype, position}) {
    subtype = subtype !== undefined ? subtype : [];
    const renderedSubtypes = subtype.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>Support</li>);

    return <div className="card card--support">
        <CardHeader
            label={name}
            position={position}
        />
        <div className="card__content">
            <p>{affiliation_name}/{faction_name}/{rarity_name}</p>
            <ul>
                {renderedSubtypes}
            </ul>
            <p>Cost: {cost}</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Support;
