// A component containing a list of Card objects
import './CardList.css';
import Character from "./Character";
import Support from "./Support";
import Event from "./Event";
import Upgrade from "./Upgrade";
import Card from "./Card";

const CardList = ({cards}) => {
    const renderCards = cards.map((card, index) => {
        let component = null;

        switch (card.type_name) {
            case 'Character' :
                component = <Character
                    key={index}
                    typeName={card.type_name}
                    label={card.name}
                    affiliation={card.affiliation_name}
                    faction={card.faction_name}
                    rarity={card.rarity_name}
                    set={card.set_name}
                    points={card.points}
                    health={card.health}
                    subtype={card.subtypes}
                />
                break;
            case 'Support' :
                console.log(card);
                component = <Support
                    key={index}
                    typeName={card.type_name}
                    label={card.name}
                    affiliation={card.affiliation_name}
                    faction={card.faction_name}
                    rarity={card.rarity_name}
                    set={card.set_name}
                    subtype={card.subtypes}
                    cost={card.cost}
                />
                break;
            case 'Upgrade':
                component = <Upgrade
                    key={index}
                    label={card.name}
                    typeName={card.type_name}
                    affiliation={card.affiliation_name}
                    faction={card.faction_name}
                    rarity={card.rarity_name}
                    set={card.set_name}
                    subtype={card.subtypes}
                    cost={card.cost}
                />
                break;
            case 'Event' :
                component = <Event
                    key={index}
                    typeName={card.type_name}
                    label={card.name}
                    affiliation={card.affiliation_name}
                    faction={card.faction_name}
                    rarity={card.rarity_name}
                    set={card.set_name}
                    subtype={card.subtypes}
                    cost={card.cost}
                />
                break;
            case 'Battlefield' :
            case 'Downgrade' :
            default :
                component = <Card
                    key={index}
                    {...card}
                />
        }

        return component;
    });

    return <div className='cards'>
        {renderCards}
    </div>
}
export default CardList