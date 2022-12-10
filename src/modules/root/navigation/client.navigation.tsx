import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ClientNavigationRoute} from '@/shared/types';
import {GalleryListScreen, ImagePreviewScreen} from '@/modules/gallery/screens';

const Stack = createNativeStackNavigator();

export const ClientNavigationStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ClientNavigationRoute.GalleryList}
        component={GalleryListScreen}
      />

      <Stack.Screen
        name={ClientNavigationRoute.ImagePreview}
        component={ImagePreviewScreen}
      />
    </Stack.Navigator>
  );
};
