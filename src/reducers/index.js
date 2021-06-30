import { combineReducers } from 'redux';

import students from './students' ;
import mentors from './mentors' ;
import companies from './companies' ;
import auth from './auth';

export const reducers = combineReducers({ students, mentors, companies, auth });

