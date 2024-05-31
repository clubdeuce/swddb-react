import CardHeader from "./CardHeader";

const Upgrade = ({label, faction, affiliation, subtype, rarity, cost, set}) => {
    return <div className="card card--upgrade">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <p><strong>Upgrade - {subtype.join(' - ')}.</strong>&nbsp;Cost: {cost}.</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Upgrade;
