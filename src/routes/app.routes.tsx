import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Local from '../pages/Local';
import CreateLocal from '../pages/CrateLocal';
import theme from '../styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: theme.colors.background
      }
    }} >
      <Screen name="Home" component={Home} />
      <Screen name="Local" component={Local} />
      <Screen name="CreateLocal" component={CreateLocal} />
    </Navigator>
  );
}

export default AppRoutes;
