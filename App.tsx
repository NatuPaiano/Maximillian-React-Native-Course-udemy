import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
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