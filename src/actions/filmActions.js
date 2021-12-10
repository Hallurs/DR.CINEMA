import filmService from '../services/filmService';
import * as constants from '../constants';

export const getAllFilms = () => async (dispatch) => {
  try {
    const films = await filmService.getAllMovies();
    dispatch(getAllFilmsSuccess(films));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export const getSingleFilm = (filmTitle) => async (dispatch) => {
  try {
    const film = await filmService.getSelectedMovie(filmTitle);
    dispatch(getSingleFilmSuccess(film));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export const getUpcomingFilms = () => async (dispatch) => {
  try {
    const film = await filmService.getUpcomingMovies();
    dispatch(getUpcomingFilmsSuccess(film));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

const getAllFilmsSuccess = (films) => ({
  type: constants.GET_FILMS,
  payload: films,
});

const getSingleFilmSuccess = (film) => ({
  type: constants.GET_SINGLE_FILM,
  payload: film,
});

const getUpcomingFilmsSuccess = (films) => ({
  type: constants.GET_UPCOMING_FILMS,
  payload: films,
});
