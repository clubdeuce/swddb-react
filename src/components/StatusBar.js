const StatusBar = ({cards = []}) => {

    return <div className="status-bar">
        <p>Cards found: {cards.length}</p>
    </div>
}

export default StatusBar;
