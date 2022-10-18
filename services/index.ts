import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, TOKEN_ID } from 'config';

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN_ID}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  },
};

const http = axios.create(axiosConfig);

export default http;
