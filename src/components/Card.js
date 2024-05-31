import CardHeader from "./CardHeader";

const Card = ({name, faction, affiliation, rarity, subtypes, type_name}) => {
    subtypes = subtypes !== undefined ? subtypes : [];
    const renderedSubtypes = subtypes.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    renderedSubtypes.unshift(<li key='0'>{type_name}</li>);

    return <div className="card">
        <CardHeader
            label={name}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <ul className="card__keywords">
            {renderedSubtypes}
        </ul>
    </div>
}

export default Card;
