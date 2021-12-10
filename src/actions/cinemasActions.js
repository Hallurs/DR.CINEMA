import cinemaService from '../services/cinemaService';
import * as constants from '../constants';

export const loadCinemas = () => async (dispatch) => {
  try {
    const cinemas = await cinemaService.loadCinemas();
    dispatch(getCinemasSuccess(cinemas));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_CINEMAS,
  payload: cinemas,
});
