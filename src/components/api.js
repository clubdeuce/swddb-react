import axios from "axios";

const baseUrl = "https://db.swdrenewedhope.com/api";
const getCard = async cardId => {
    return axios.get(`${baseUrl}/public/card/${cardId}`);
}

export {getCard}
