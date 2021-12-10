import { GET_UPCOMING_FILMS } from "../constants";

export default function (state = [], action) {
    switch (action.type) {
        case GET_UPCOMING_FILMS: return action.payload;
        default: return state;
    }
}