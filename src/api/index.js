import axios from "axios";
const URL = 'https://apilast.herokuapp.com';
export const fetchPosts = () => axios.get(`${URL}/api/Cost`)
export const createSchedule = (payload) => axios.post(`${URL}/api/Schedule`, payload)

