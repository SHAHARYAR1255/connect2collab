import axios from 'axios';

const url= 'https://my-json-server.typicode.com/shaharyar1255/json-server/' ;

export const fetchStudents = () => axios.get(`${url}/students`);
export const fetchMentors = () => axios.get(`${url}/mentors`);
export const fetchCompanies = () => axios.get(`${url}/companies`);

