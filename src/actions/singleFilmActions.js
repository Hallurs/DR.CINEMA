import singleFilmService from '../services/singleFilmService';
import * as constants from '../constants';

export const getSingleFilm = (filmTitle) => {
    return async dispatch => {
        try {
            const film = await singleFilmService.getSelectedMovie(filmTitle);
            dispatch(getSingleFilmSuccess(film));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getSingleFilmSuccess = film => ({
    type: constants.GET_SINGLE_FILM,
    payload: film
});