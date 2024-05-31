import CardHeader from "./CardHeader";

const Card = ({label, faction, affiliation, rarity, subtype}) => {
    subtype = subtype !== undefined ? subtype : [];
    const renderedSubtypes = subtype.map((subtype, index) => {
        return <li key={index + 1}>{subtype.name}</li>;
    });

    return <div className="card">
        <CardHeader
            label={label}
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
