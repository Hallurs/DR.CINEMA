const NOW_PLAYING_ENDPOINT = 'http://api.kvikmyndir.is/movies';
const axios = require('axios');

const moviesService = {
    getNowplaying: async () => {
        const result = await axios.get(NOW_PLAYING_ENDPOINT);
        const json = await result.json();
        return json;
    }
};

export default moviesService;