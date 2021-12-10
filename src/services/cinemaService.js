import axios from 'axios';
import { TOKEN } from '../constants';

const cinemaService = {
  loadCinemas: async () => {
      const url = 'https://api.kvikmyndir.is/theaters';
      var token = TOKEN;     
      let config = {
        headers: {
          "x-access-token" : token
        }
      }
      
      const result = await (await axios.get(url, config)).data.sort((a, b) => a.name.localeCompare(b.name));
      return result;
  }
};

export default cinemaService;