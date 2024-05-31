import './Card.css';
import Character from "./Character";

const Card = (props) => {
    let keywords = ['Character', 'Inquisitor'];

    return <Character
        title='Ninth Sister'
        subtitle='Brutal Empath'
        affiliation='Villain'
        faction='Force'
        rarity='Starter'
        set='Faltering Allegiances'
        points='12/16'
        health='12'
        keywords={keywords}
    />
}

export default Card;
