import React, {FC, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {RouteParams} from '@/shared/types';

export interface ImagePreviewScreenRouteParams {
  imageUri: string;
}

interface ImagePreviewScreenProps
  extends RouteParams<ImagePreviewScreenRouteParams> {}

export const ImagePreviewScreen: FC<ImagePreviewScreenProps> = ({
  navigation,
  route,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const renderingIndicatorIfImgLoading = useMemo(() => {
    if (isLoading)
      return (
        <ActivityIndicator
          style={styles.indicator}
          color={'#000'}
          size="large"
        />
      );
  }, [isLoading]);

  useEffect(() => {
    navigation.setOptions({title: 'Image Preview'});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {renderingIndicatorIfImgLoading}

      <ImageBackground
        source={{uri: route.params.imageUri}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode={'contain'}
        style={styles.img}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  indicator: {
    position: 'absolute',
  },
});
