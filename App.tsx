import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/index.routes';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';
import { View } from 'react-native';
import { UserProvider } from './src/contexts/userContext';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
          <UserProvider>
            <StatusBar  style="dark" />

            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
              <Routes />
            </View>
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
  );
}
