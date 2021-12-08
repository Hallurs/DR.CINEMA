import { GET_NOW_PLAYING } from "../constants";

export const getNowPlaying = async dispatch => {

};

const getNowPlayingSuccess = nowPlaying => ({
    type: GET_NOW_PLAYING,
    payload: nowPlaying
});