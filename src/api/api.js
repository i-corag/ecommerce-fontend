import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

axios.defaults.withCredentials = true; //to be able to read session

const URI = axios.create({
  withCredentials: true,
  baseURL: 'https://ecommerce-backend-production-2b45.up.railway.app/api/',
});

const queryClient = new QueryClient();

export { URI, queryClient };
