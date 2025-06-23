import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import AppNavigation from 'navigation/appNavigation';
import './global.css';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
          'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
          'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
          'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
          'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AppNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
