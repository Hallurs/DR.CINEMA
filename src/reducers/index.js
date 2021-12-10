import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilmsReducer';
import cinemas from './cinemasReducer';
import films from './filmsReducer';
import singleFilm from './singleFilmReducer';

export default combineReducers({
  upcomingFilms,
  cinemas,
  films,
  singleFilm,
});
