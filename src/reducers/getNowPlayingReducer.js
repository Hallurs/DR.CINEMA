import { GET_NOW_PLAYING } from "../constants";

export default function (state = 0, action) {
    switch (action.type) {
        case GET_NOW_PLAYING: return action.payload;
        default: return state;
    }
}