import {useCallback, useEffect, useState} from 'react';

import {unsplashService} from '@/shared/services';
import {UnsplashPhoto} from '@/shared/types';

const INITIAL_PAGE = 1;

export const usePaginationPhotosList = () => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

  const [page, setPage] = useState<number>(INITIAL_PAGE);

  const [isLoading, setLoading] = useState(true);
  const [isLoadingNext, setIsLoadingNext] = useState(false);

  const disableLoadingFlags = useCallback(() => {
    setLoading(false);
    setIsLoadingNext(false);
  }, []);

  const fetchPhotos = useCallback(
    async (isFirstFetch = false) => {
      if (isFirstFetch) {
        setLoading(true);
        setPage(INITIAL_PAGE);
      } else setIsLoadingNext(true);

      try {
        const fetchedPhotos = await unsplashService.getPhotos({page});

        setPage(prev => ++prev);

        if (isFirstFetch) setPhotos(fetchedPhotos);
        else setPhotos(prev => [...prev, ...fetchedPhotos]);
      } catch (err) {
        console.log('ERR usePaginationPhotosList > fetchPhotos', err);
      } finally {
        disableLoadingFlags();
      }
    },
    [page],
  );

  const loadMore = useCallback(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const reset = useCallback(() => {
    fetchPhotos(true);
  }, []);

  useEffect(() => {
    fetchPhotos(true);
  }, []);

  return {
    photos,
    isLoading,
    isLoadingNext,
    loadMore,
    reset,
  };
};
