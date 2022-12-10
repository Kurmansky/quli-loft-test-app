import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Root} from './modules/root';

export const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
