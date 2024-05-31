import CardHeader from "./CardHeader";

function Support({label, affiliation, faction, rarity, set, cost, subtype}) {
    subtype = subtype !== undefined ? subtype : [];
    const renderedSubtypes = subtype.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>Support</li>);

    return <div className="card card--support">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <ul>
                {renderedSubtypes}
            </ul>
            <p>Cost: {cost}.</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Support;
