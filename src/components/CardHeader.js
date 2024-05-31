function cardHeader({title, subtitle, affiliation, faction, rarity}) {
    let text = title;

    if (subtitle.length >= 1) {
        text += ' - ' + subtitle;
    }

    return <header className='card__header'>
        <h3>{text}</h3>
        <p>{affiliation} {faction} {rarity}</p>
    </header>
}

export default cardHeader;
