import { FETCH_STUDENTS, STUDENTS_LOADING, STUDENTS_FAILED } from '../constants/actionTypes';

export default (state = {
    isloading: true,
    errMessage: null,
    students: []
}, action) => {
    switch (action.type) {
        case STUDENTS_LOADING:
            return {...state, isLoading: true, errMessage: null, students: [] }
        case FETCH_STUDENTS:
            return {...state, isLoading: false, errMessage: null, students:action.payload}
        case STUDENTS_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, students:[]}
        default:
            return state ;
        }
}