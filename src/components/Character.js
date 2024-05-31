import CardHeader from "./CardHeader";

function Character({label, affiliation, faction, rarity, points, subtype, health}) {
    return <div className="card card--leader">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <p><strong>Character - {subtype.join(' - ')}.</strong>&nbsp;Points: {points}.&nbsp;Health: {health}</p>
        </div>
    </div>
}

export default Character;
