import axios from 'axios';
import { TOKEN } from '../constants';

const filmService = {
    getAllMovies: async () => {
        const url = `https://api.kvikmyndir.is/movies/`;
        var token = TOKEN;     
        let config = {
            headers: {
                "x-access-token" : token
            }
        }
        const result = await (await axios.get(url, config)).data;
        return result;
    },
    getSelectedMovie: async (filmTitle) => {
        const url = `https://api.kvikmyndir.is/movies/?title=${filmTitle}`;
        var token = TOKEN;     
        let config = {
            headers: {
                "x-access-token" : token
            }
        }
        const result = await (await axios.get(url, config)).data;
        return result;
    },
    getUpcomingMovies: async() => {
        const url = 'https://api.kvikmyndir.is/upcoming';
        var token = TOKEN;     
        let config = {
          headers: {
            "x-access-token" : token
          }
        }

        const result = await (await axios.get(url, config)).data.sort((a, b) => a["release-dateIS"].localeCompare(b["release-dateIS"]));
        return result;
    }
};

export default filmService;