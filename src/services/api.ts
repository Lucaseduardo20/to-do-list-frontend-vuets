import axios from "axios";

const baseURLs = {
    development: 'http://localhost:8000/api',
    production: 'https://production.com/api'
};

export const baseURL = baseURLs.development;

export const Api = axios.create({
    baseURL: baseURL,
  });
