// A component containing a list of Card objects
import Card from "./Card";
import Character from "./Character";
import Support from "./Support";

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
    </div>
}
export default CardList