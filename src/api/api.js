import axios from 'axios'

export const BASEURL = "http://34.227.52.139:1337/";

const api = axios.create({baseURL: BASEURL});

export default api;