import CinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getCinemaList = () => {
    return async dispatch => {
        try {
            const CinemaList = await CinemaService.getCinemaList();
            dispatch(getCinemaListSuccess(CinemaList));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCinemaListSuccess = CinemaList => ({
    type: constants.CINEMAS,
    payload: CinemaList
});