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
    return axios.get(`${baseUrl}/public/sets`);
}

/**
 *
 * @param setId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getSet = setId => {
    setId = undefined !== setId && setId !== '0' ? setId : '';
    console.log(`${baseUrl}/public/cards/${setId}`);
    return axios.get(`${baseUrl}/public/cards/${setId}`);
}

/**
 *
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getCards = () => {
    return axios.get(`${baseUrl}/public/cards`);
}

export {getCard, getSets, getSet, getCards}
