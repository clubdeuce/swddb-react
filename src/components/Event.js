import CardHeader from "./CardHeader";

const Event = ({label, faction, affiliation, rarity, cost, set}) => {
    return <div className="card card--event">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <p><strong>Event.</strong>&nbsp;Cost: {cost}.</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Event;
