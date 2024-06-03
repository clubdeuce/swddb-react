import axios from "axios";


const baseUrl = "https://db.swdrenewedhope.com/api";

/**
 *
 * @param cardId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getCard = cardId => {
    return axios.get(`${baseUrl}/public/card/${cardId}`);
}

/**
 *
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getSets = () => {
    return axios.get(`${baseUrl}/public/sets/`);
}

/**
 *
 * @param setId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getSet = setId => {
    setId = setId === 'all'? '' : setId;

    return axios.get(`${baseUrl}/public/cards/${setId}`);
}

/**
 *
 * @param setId
 * @param faction
 * @param affiliation
 * @param rarity
 * @returns {Promise<axios.AxiosResponse<any>>|Promise<axios.AxiosResponse<*>>}
 */
const find = (setId = 'all', faction = 'all', affiliation = 'all', rarity = 'all') => {

    let queryVars = [];

    console.log(setId !== 'all');

    if (setId !== 'all') {
        queryVars.push('s:AW');
        console.log(queryVars);
    }

    if (faction !== 'all') {
        queryVars.push(`f:${faction}`);
        console.log(queryVars);
    }

    if (affiliation !== 'all') {
        queryVars.push(`a:${affiliation}`);
        console.log(queryVars);
    }

    if (rarity !== 'all') {
        queryVars.push(`u:${rarity}`);
        console.log(queryVars);
    }

    if (queryVars.length) {
        //return axios.get(`${baseUrl}/public/find/q=${encodeURI(queryVars.join('+'))}`)
        return axios.get(`${baseUrl}/public/sets/q={s:AW,t:character}`)
    }

    return getCards();
}

/**
 *
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getCards = () => {
    return axios.get(`${baseUrl}/public/cards/`);
}

export {getCard, getSets, getSet, getCards, find}
