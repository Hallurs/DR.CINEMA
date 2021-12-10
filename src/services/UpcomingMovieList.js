import axios from 'axios';

const loadUpcomingMovies = async() => {
    const url = 'https://api.kvikmyndir.is/upcoming';
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMDE3ZGExMTQ0MDFmNDU2NWRmYTYiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkR1bWJ5IiwiZW1haWwiOiJpY2VsYW5kMjcwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY29vbGd1eSIsInBhc3N3b3JkIjoiJDJhJDA4JDRXZ0VLNldKSWlCd0w2d09hV0ZnTnV0QVlZOUhxUUpHUncya3JUTEViSURBTVRpZVIwMFptIiwiZG9tYWluIjoibnVucy5jb20iLCJtZXNzYWdlIjoiU3R1ZGVudCBwcm9qZWN0IiwiaWF0IjoxNjM5MTM0Mzk3LCJleHAiOjE2MzkyMjA3OTd9.l1ZOMfDiVpnXDXAM5ZYITMdkId63a-5gmUSTXhmXtdQ";     
    let config = {
      headers: {
        "x-access-token" : token
      }
    }
    
    return await axios.get(url, config);
};

export default loadUpcomingMovies;