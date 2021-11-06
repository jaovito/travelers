import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import theme from '../styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

function RegisterRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: theme.colors.background
      }
    }} >
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
}

export default RegisterRoutes;
