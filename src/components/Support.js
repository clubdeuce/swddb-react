import CardHeader from "./CardHeader";

function Support({label, affiliation, faction, rarity, set, cost}) {

    return <div className="card card--support">
        <CardHeader
            label={label}
            affiliation={affiliation}
            faction={faction}
            rarity={rarity}
        />
        <p><strong>Support.</strong>&nbsp;Cost: {cost}.</p>
        <p className='card__set'>{set}</p>
    </div>
}

export default Support;
