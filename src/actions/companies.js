import { FETCH_COMPANIES, COMPANIES_FAILED, COMPANIES_LOADING } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCompanies = () => async (dispatch) => {
    try {
        dispatch({ type: COMPANIES_LOADING });

        const { data } = await api.fetchCompanies();
        console.log(data);

        dispatch({ type: FETCH_COMPANIES, payload: data })
    }
    catch (err) {
        console.log(err);
        dispatch({ type: COMPANIES_FAILED, payload: err })
    }
}