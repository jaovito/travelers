import * as React from 'react';
import AppLoading from 'expo-app-loading';

import AppRoutes from './app.routes';
import RegisterRoutes from './register.routes';
import { useInfo } from '../contexts/userContext';



function Routes() {
  const { name, loading } = useInfo()

  if (loading) {
    return <AppLoading />
  }

  return !!name ? <AppRoutes /> : <RegisterRoutes />
}

export default Routes;
