import CardHeader from "./CardHeader";

const Event = ({name, faction_name, affiliation_name, rarity_name, cost, set_name, type_name, position, imagesrc}) => {

    return <div className="card card--event">
        <CardHeader
            label={name}
            affiliation={affiliation_name}
            faction={faction_name}
            rarity={rarity_name}
            position={position}
        />
        <div className="card__content-wrap">
            <div className="card__content">
                <p>{affiliation_name}/{faction_name}/{rarity_name}</p>
                <ul>
                    <li key='0'>{type_name}</li>
                </ul>
                <p>Cost: {cost}</p>
                <p className='card__set'>{set_name}</p>
            </div>
            <div className="card__image-wrap">
                <img src={imagesrc} alt={name} />
            </div>
        </div>
    </div>
}

export default Event;
