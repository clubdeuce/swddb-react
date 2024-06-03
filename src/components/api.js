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
        queryVars.push(`s:${setId}`);
    }

    if (faction !== 'all') {
        queryVars.push(`f:${faction}`);
    }

    if (affiliation !== 'all') {
        queryVars.push(`a:${affiliation}`);
    }

    if (rarity !== 'all') {
        queryVars.push(`y:${rarity}`);
    }

    if (queryVars.length) {
        console.log(queryVars);
        return axios.get(`${baseUrl}/public/find?q=${encodeURI(queryVars.join('+'))}`)
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
