import axios from 'axios';

// TODO maybe look into rather using the mongoid
const ENDPOINT = 'https://api.kvikmyndir.is/movies/?title=Dear Comrades!';

const singleMovieService = {
    getSelectedMovie: async (filmTitle) => {
        /*  const result = await fetch(ENDPOINT +filmTitle);
        const json = await result.json();

        return json.main.temp;
        const url = 'https://api.kvikmyndir.is/movies/title='; */
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZTkxY2ExMTQ0MDFmNDU2NWRmOTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhhbGx1ciBIZXJtYW5uc3NvbiBBc3BhciIsImVtYWlsIjoiaGFsbHVyaEA3dW5kLmlzIiwidXNlcm5hbWUiOiJoYWxsaSIsInBhc3N3b3JkIjoiJDJhJDA4JGI1N1QvUXV2T2hSNkI1Tmx6OWcwSk9lbHhjaElLMGg2Zy9Ebi5IcWpIYlRSbDhUd3NvMmpxIiwiZG9tYWluIjoiaGFsbGkiLCJtZXNzYWdlIjoic2Nob29sIHByb2plY3QsIMO-csOzdW4gc23DoWZvcnJpdGEiLCJpYXQiOjE2MzkwMzkyMTEsImV4cCI6MTYzOTEyNTYxMX0.sGum5GiEaDQ0eeSyoGOvSLxBT1PKE5uhOsjtN-AzFH4';     
        let config = {
            headers: {
                'x-access-token' : token
                }
        }

        await axios.get(url, config).then((shit) => console.log(shit))
    }
};

export default singleMovieService;