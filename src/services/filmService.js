import axios from 'axios';
import { TOKEN } from '../constants';

const filmService = {
  getAllMovies: async () => {
    const url = 'https://api.kvikmyndir.is/movies/';
    const token = TOKEN;
    const config = {
      headers: {
        'x-access-token': token,
      },
    };
    const result = await (await axios.get(url, config)).data;
    return result;
  },
  getSelectedMovie: async (filmTitle) => {
    const url = `https://api.kvikmyndir.is/movies/?title=${filmTitle}`;
    const token = TOKEN;
    const config = {
      headers: {
        'x-access-token': token,
      },
    };
    const result = await (await axios.get(url, config)).data;
    return result;
  },
  getUpcomingMovies: async () => {
    const url = 'https://api.kvikmyndir.is/upcoming';
    const token = TOKEN;
    const config = {
      headers: {
        'x-access-token': token,
      },
    };

    const result = await (await axios.get(url, config)).data.sort((a, b) => a['release-dateIS'].localeCompare(b['release-dateIS']));
    return result;
  },
};

export default filmService;
