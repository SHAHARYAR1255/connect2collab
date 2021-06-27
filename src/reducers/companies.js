import { FETCH_COMPANIES, COMPANIES_FAILED, COMPANIES_LOADING } from '../constants/actionTypes';

export default (state = {
    isloading: true,
    errMessage: null,
    companies: []
}, action) => {
    switch (action.type) {
        case COMPANIES_LOADING:
            return {...state, isLoading: true, errMessage: null, companies: [] }
        case FETCH_COMPANIES:
            return {...state, isLoading: false, errMessage: null, companies:action.payload}
        case COMPANIES_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, companies:[]}
        default:
            return state ;
        }
}