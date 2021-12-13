import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';
//testing git from another device
export default function App() {
	enableScreens();
	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if(!fontsLoaded) return <AppLoading />

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  
});