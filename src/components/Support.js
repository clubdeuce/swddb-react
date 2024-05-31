import CardHeader from "./CardHeader";

function Support({label, affiliation, faction, rarity, set, cost}) {

    return <div className="card card--support">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <div className="card__content">
            <p>{affiliation}/{faction}/{rarity}</p>
            <p><strong>Support.</strong>&nbsp;Cost: {cost}.</p>
            <p className='card__set'>{set}</p>
        </div>
    </div>
}

export default Support;
