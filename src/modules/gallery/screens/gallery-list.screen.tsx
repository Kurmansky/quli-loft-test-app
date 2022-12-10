import React, {FC, useEffect} from 'react';
import {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  ClientNavigationRoute,
  RouteParams,
  UnsplashPhoto,
} from '@/shared/types';

import {ImageRowItem} from '../components';
import {usePaginationPhotosList} from '../hook';
import {ImagePreviewScreenRouteParams} from './image-preview.screen';

interface GalleryListScreen extends RouteParams {}

export const GalleryListScreen: FC<GalleryListScreen> = ({navigation}) => {
  const photosList = usePaginationPhotosList();

  const navigateToImagePreview = useCallback(
    (imageUri: string) => {
      navigation.navigate<ImagePreviewScreenRouteParams>(
        ClientNavigationRoute.ImagePreview,
        {imageUri},
      );
    },
    [navigation],
  );

  const renderItem: ListRenderItem<UnsplashPhoto> = useCallback(
    ({item, index}) => {
      return (
        <ImageRowItem
          key={`item.id==${index}`}
          imgUri={item.urls.small}
          imgName={item?.description || item.alt_description}
          imgAuthor={item.user.username}
          onPress={() => navigateToImagePreview(item.urls.full)}
        />
      );
    },
    [navigateToImagePreview],
  );

  const renderLoadIndicatorIfListOnLoadingNext = useCallback(() => {
    if (photosList.isLoadingNext)
      return (
        <ActivityIndicator style={styles.activityIndicator} color={'#000'} />
      );
  }, [photosList.isLoadingNext]);

  useEffect(() => {
    navigation.setOptions({title: 'Gallery List'});
  }, [navigation]);

  return (
    <SafeAreaView>
      <FlatList
        refreshing={photosList.isLoading}
        data={photosList.photos}
        renderItem={renderItem}
        onRefresh={photosList.reset}
        onEndReached={photosList.loadMore}
        ListFooterComponent={renderLoadIndicatorIfListOnLoadingNext}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 20,
  },
});
