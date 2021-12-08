import axios from 'axios';

// TODO maybe look into rather using the mongoid
const ENDPOINT = 'https://api.kvikmyndir.is/movies/?title=Dear Comrades!';

const singleMovieService = {
    getSelectedMovie: async (filmTitle) => {
        /*  const result = await fetch(ENDPOINT +filmTitle);
        const json = await result.json();

        return json.main.temp;
        const url = 'https://api.kvikmyndir.is/movies/title='; */
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMDE3ZGExMTQ0MDFmNDU2NWRmYTYiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkR1bWJ5IiwiZW1haWwiOiJpY2VsYW5kMjcwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY29vbGd1eSIsInBhc3N3b3JkIjoiJDJhJDA4JDRXZ0VLNldKSWlCd0w2d09hV0ZnTnV0QVlZOUhxUUpHUncya3JUTEViSURBTVRpZVIwMFptIiwiZG9tYWluIjoibnVucy5jb20iLCJtZXNzYWdlIjoiU3R1ZGVudCBwcm9qZWN0IiwiaWF0IjoxNjM4ODkwNjI1LCJleHAiOjE2Mzg5NzcwMjV9._lF8mA3LF1UHT-Sq8saabah_45tLfgBMfzaDlfCdFFg';     
        let config = {
            headers: {
                'x-access-token' : token
                }
        }

        await axios.get(url, config).then((shit) => console.log(shit))
    }
};

export default singleMovieService;