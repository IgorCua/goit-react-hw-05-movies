import axios from "axios";
 
const API_KEY = "5aa25f9e8e2618b75e9d0b59d473edb9";

axios.defaults.baseURL = 'https://api.themoviedb.org';

export const requestAPI = async (param) => {
    const paramCheck = param !== undefined ? param : 'popular';
    try{
        const req = await axios.get(`/3/movie/${paramCheck}?api_key=${API_KEY}`)
        return req;
    } catch (error) {
        console.log(error)
    }
}

export async function searchMovieAPI (query) {
    try{
        const req = await axios.get(`/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`);
        return req;
    } catch (error) {
        console.log(error);
    }
}