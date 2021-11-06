import { createNavigationContainerRef, NavigationProp } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>()

export function navigate(name: string, params?: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
