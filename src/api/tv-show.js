import axios from "axios";
import { baseUrl, apiKeyParams } from '../config';

export class TvShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${baseUrl}tv/popular${apiKeyParams}`);
        return response.data.results
    }

    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${baseUrl}tv/${tvShowId}/recommendations${apiKeyParams}`);
        return response.data.results
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${baseUrl}search/tv${apiKeyParams}&query=${title}`);
        return response.data.results
    }
}