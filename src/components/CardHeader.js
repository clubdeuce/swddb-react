function cardHeader({label, affiliation, faction, rarity}) {
    return <header className='card__header'>
        <h3>{label}</h3>
        <p>{affiliation}/{faction}/{rarity}</p>
    </header>
}

export default cardHeader;
