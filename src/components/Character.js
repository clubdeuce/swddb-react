function Character(props) {
    const cardHeader = () => {
        let text = props.title;

        if (props.subtitle.length >= 1) {
            text += ' - ' + props.subtitle;
        }

        return <header className='card__header'>
            <h3>{text}</h3>
        </header>
    }

    const renderKeywords = () => {
        let keywords = [];

        if ( undefined !== props.keywords && props.keywords.length >= 1) {
            console.log(props.keywords);
            keywords = props.keywords;
        }

        return keywords.join(' - ')
    }

    const renderCardProperties = () => {
        let properties = renderKeywords() + '.';
        
        if(undefined !== props.points && props.points.length >= 1) {
            properties += ' Points: ' + props.points;
        }

        if(undefined !== props.health && props.health >= 1) {
            properties += ' Health: ' + props.health;
        }

        return properties;
    }

    return <div className="card card--leader">
        {cardHeader()}
        <p>{props.affiliation} {props.faction} {props.rarity}</p>
        <p>{renderCardProperties()}</p>
    </div>
}

export default Character;
