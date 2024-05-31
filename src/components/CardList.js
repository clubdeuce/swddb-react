// A component containing a list of Card objects
import Character from "./Character";
import Support from "./Support";
import Event from "./Event";
import Upgrade from "./Upgrade";

const CardList = (props) => {

    return <div className='cards'>
        <Character
            label='Ninth Sister - Brutal Empath'
            affiliation='Villain'
            faction='Force'
            rarity='Starter'
            set='Faltering Allegiances'
            points='12/16'
            health='12'
            keywords={['Character', 'Inquisitor']}
        />
        <Support
            label='Painful Lessons'
            affiliation='Villain'
            faction='Force'
            rarity='Starter'
            set='Faltering Allegiances'
            cost='0'
            keywords={['Support']}
        />

        <Event
            label='Peace is a Lie'
            affiliation='Villain'
            faction='Force'
            rarity='Starter'
            cost='0'
            set='Faltering Allegiances'
            />

        <Upgrade
            label='Sith Warblade'
            affiliation='Villain'
            faction='Force'
            rarity='Starter'
            set='Faltering Allegiances'
            cost='3'
            subtype={['Weapon']}
            />
    </div>
}
export default CardList