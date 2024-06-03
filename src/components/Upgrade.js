import CardHeader from "./CardHeader";

const Upgrade = ({name, faction_name, affiliation_name, subtypes, rarity_name, cost, set_name, position, imagesrc}) => {
    subtypes = subtypes !== undefined ? subtypes : [];
    const renderedSubtypes = subtypes.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>Upgrade</li>)

    return <div className="card card--upgrade">
        <CardHeader
            label={name}
            position={position}
        />
        <div className="card__content-wrap">
            <div className="card__content">
                <p>{affiliation_name}/{faction_name}/{rarity_name}</p>
                <ul className="card__keywords">
                    {renderedSubtypes}
                </ul>
                <p>Cost: {cost}</p>
                <p className='card__set'>{set_name}</p>
            </div>
            <div className="card__image-wrap">
                <img src={imagesrc} alt={name}/>
            </div>
        </div>
    </div>
}

export default Upgrade;
