import {getSets} from "./api";
import {useEffect, useState} from "react";

const SetSelect = ({cardSet, setCardSet}) => {
    const [sets, setSets] = useState([]);

    const onSetChange = (e) => {
        setCardSet(e.target.value);
    }

    const renderedSetOptions = sets.map((set, index) => {
        return <option key={index} value={set.code}>{set.name}</option>;
    })

    useEffect(() => {
        getSets().then((res) => {
            setSets(res.data);
        })
    }, [])

    return <label htmlFor="card-set">Set:
        <select id='card-set' className='card-set' value={cardSet} onChange={onSetChange}>
            <option value="all">All</option>
            {renderedSetOptions}
        </select>
    </label>
}

export default SetSelect
