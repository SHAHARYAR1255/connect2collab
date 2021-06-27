import { FETCH_MENTORS, MENTORS_FAILED, MENTORS_LOADING } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getMentors = () => async (dispatch) => {
    try {
        dispatch({ type: MENTORS_LOADING });

        const { data } = await api.fetchMentors();
        console.log(data);

        dispatch({ type: FETCH_MENTORS, payload: data })
    }
    catch (err) {
        console.log(err);
        dispatch({ type: MENTORS_FAILED, payload: err })
    }
}