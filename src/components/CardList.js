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
                    {...card}
                />
                break;
            case 'Support' :
                component = <Support
                    key={index}
                    {...card}
                />
                break;
            case 'Upgrade':
                component = <Upgrade
                    key={index}
                    {...card}
                />
                break;
            case 'Event' :
                component = <Event
                    key={index}
                    {...card}
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