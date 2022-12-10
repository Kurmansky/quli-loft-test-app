import {GetPhotosParams, getPhotosReq} from '@/api/unsplash';

import {UnsplashPhoto} from '../types';

class UnsplashService {
  public async getPhotos(params: GetPhotosParams): Promise<UnsplashPhoto[]> {
    try {
      const {data: photos} = await getPhotosReq(params);
      return photos;
    } catch (err) {
      throw err;
    }
  }
}

export const unsplashService = new UnsplashService();
