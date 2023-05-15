import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
//import Axios from 'axios';

axios.defaults.withCredentials = true; //to be able to read session

const URI = axios.create({
  withCredentials: true,
  baseURL: '/api/',
});

const queryClient = new QueryClient();

export { URI, queryClient };
