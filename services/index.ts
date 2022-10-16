import axios from 'axios';
import { BASE_URL, TOKEN_ID } from 'config';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN_ID}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  (response) => {
    console.info('response api');
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
