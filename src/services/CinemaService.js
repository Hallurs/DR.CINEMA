const ENDPOINT = 'https://api.kvikmyndir.is/movies';

const weatherService = {
    getCurrentDegree: async () => {
        const result = await fetch(ENDPOINT);
        const json = await result.json();
        return json.main.temp;
    }
};

export default CinemaService;