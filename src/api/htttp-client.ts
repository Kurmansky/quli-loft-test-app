import axios, {AxiosResponse} from 'axios';

import {getEnv} from '@/shared/utils';

export type HttpResponse<T> = Promise<AxiosResponse<T>>;

const UNSPLASH_API_TOKEN = getEnv('UNSPLASH_API_TOKEN');

const axiosInstance = axios.create({
  baseURL: getEnv('UNSPLASH_API_URL'),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${UNSPLASH_API_TOKEN}`,
  },
  timeout: 6000,
});

export {axiosInstance as http};
