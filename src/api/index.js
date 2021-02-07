import axios from 'axios'
const URL = process.env.REACT_APP_COVID_URL;

export const API = axios.create({
    baseURL: URL
})


