import axios from 'axios'

export const BASEURL = "http://3.86.45.118";
export const key = "2ea3d9a469b9894f9147e545ec4bac";

const api = axios.create({baseURL: "http://3.86.45.118/cockpit/api/"});

export default api;