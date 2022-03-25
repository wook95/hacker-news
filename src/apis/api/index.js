import axios from 'axios';

const API = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
