import CardHeader from "./CardHeader";

const Event = ({label, faction, affiliation, rarity, cost, set}) => {
    return <div className="card card--event">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <p><strong>Event.</strong>&nbsp;Cost: {cost}.</p>
        <p className='card__set'>{set}</p>
    </div>
}

export default Event;
