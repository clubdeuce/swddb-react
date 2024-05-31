function cardHeader({label, position}) {
    return <header className='card__header'>
        <h3 className='label'>{label}</h3>
        <span className='meta'>
            #{position}
        </span>
    </header>
}

export default cardHeader;
