import CardHeader from "./CardHeader";

const Card = ({name, faction_name, affiliation_name, rarity_name, subtypes, type_name, set_name, position, imagesrc}) => {
    subtypes = subtypes !== undefined ? subtypes : [];
    const renderedSubtypes = subtypes.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>{type_name}</li>);

    return <div className="card">
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
                <p>{set_name}</p>
            </div>
            <div className="card__image-wrap">
                <img src={imagesrc} alt={name}/>
            </div>
        </div>
    </div>
}

export default Card;
