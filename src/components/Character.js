import CardHeader from "./CardHeader";

function Character({
    name,
    subtitle,
    affiliation_name,
    faction_name,
    rarity_name,
    type_name,
    subtypes,
    points,
    health,
    set_name,
    position,
    imagesrc
}) {
    let subtype = subtypes !== undefined ? subtypes : [];

    const renderSubtypes = subtype.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderSubtypes.unshift(<li key='0'>{type_name}</li>);

    return <div className="card card--leader">
        <CardHeader
            label={name}
            position={position}
        />
        <div className="card__content-wrap">
            <div className="card__content">
                <p>{affiliation_name}/{faction_name}/{rarity_name}</p>
                <ul>{renderSubtypes}</ul>
                <p>Points: {points}</p>
                <p>Health: {health}</p>
                <p>{set_name}</p>
            </div>
            <div className="card__image-wrap">
                <img src={imagesrc} alt={`${name} - ${subtitle} `} />
            </div>
        </div>
    </div>
}

export default Character;
