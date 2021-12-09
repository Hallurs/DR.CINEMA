import { combineReducers } from 'redux';
import getNowPlayingReducer from './getNowPlayingReducer';
import upcomingFilms from './upcomingFilmsReducer';
import cinemas from './cinemasReducer';
import films from './filmsReducer';
import singleFilm from './singleFilmReducer';

export default combineReducers({
    getNowPlayingReducer,
    upcomingFilms,
    cinemas,
    films,
    singleFilm
});