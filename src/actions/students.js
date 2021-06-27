import { FETCH_STUDENTS, STUDENTS_FAILED, STUDENTS_LOADING } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getStudents = () => async (dispatch) => {
    try {
        dispatch({ type: STUDENTS_LOADING });

        const { data } = await api.fetchStudents();
        console.log(data);

        dispatch({ type: FETCH_STUDENTS, payload: data })
    }
    catch (err) {
        console.log(err);
        dispatch({ type: STUDENTS_FAILED, payload: err })
    }
}