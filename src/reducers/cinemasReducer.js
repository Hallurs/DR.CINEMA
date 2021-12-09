import { GET_CINEMAS } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_CINEMAS: return action.payload;
        default: return state;
    }
}