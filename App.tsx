import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useCallback } from 'react';
import { StatusBar } from 'react-native';

import { TodosProvider } from './src/context/TodosContext';
import { Home } from './src/views/Home';

preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return;

  return (
    <>
      <StatusBar
        translucent={true}
        barStyle='light-content'
        backgroundColor='transparent'
      />
      <TodosProvider>
        <Home onLayout={onLayoutRootView} />
      </TodosProvider>
    </>
  );
}
