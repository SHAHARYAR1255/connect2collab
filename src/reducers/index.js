import { combineReducers } from 'redux';

import students from './students' ;
import mentors from './mentors' ;
import companies from './companies' ;

export const reducers = combineReducers({ students, mentors, companies });
