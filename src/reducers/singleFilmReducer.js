import { GET_SINGLE_FILM } from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_FILM: return action.payload;
    default: return state;
  }
}
