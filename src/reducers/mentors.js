import { FETCH_MENTORS, MENTORS_FAILED, MENTORS_LOADING } from '../constants/actionTypes';

export default (state = {
    isloading: true,
    errMessage: null,
    mentors: []
}, action) => {
    switch (action.type) {
        case MENTORS_LOADING:
            return {...state, isLoading: true, errMessage: null, mentors: [] }
        case FETCH_MENTORS:
            return {...state, isLoading: false, errMessage: null, mentors:action.payload}
        case MENTORS_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, mentors:[]}
        default:
            return state ;
        }
}