import {UnsplashPhoto} from '@/shared/types/interfaces/entities';

import {GetPhotosParams} from './interfaces';
import {http, HttpResponse} from '../htttp-client';

export const getPhotosReq = (
  params: GetPhotosParams,
): HttpResponse<UnsplashPhoto[]> => {
  return http.get<UnsplashPhoto[]>('/photos', {params});
};
