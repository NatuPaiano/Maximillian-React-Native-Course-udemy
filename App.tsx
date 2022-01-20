import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import store from './store';
import ShopNavigator from './navigation/ShopNavigator';

const App = () => {
  // TODO: fix eslint error
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
