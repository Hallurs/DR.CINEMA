import { GET_FILMS } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FILMS: return action.payload;
        default: return state;
    }
}