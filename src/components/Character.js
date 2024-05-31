import CardHeader from "./CardHeader";

function Character(props) {
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
        <CardHeader
            label={props.label}
            affiliation={props.affiliation}
            faction={props.faction}
            rarity={props.rarity}
        />
        <p>{renderCardProperties()}</p>
    </div>
}

export default Character;
