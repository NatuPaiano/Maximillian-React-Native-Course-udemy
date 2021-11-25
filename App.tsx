import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header/Header.component';
import GameOverScreen from './screens/gameOverScreen/GameOverScreen';
import GameScreen from './screens/gameScreen/GameScreen';
import StartGameScreen from './screens/startGameScreen/StartGameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState<number>(0);
	const [guessRounds, setGuessRounds] = useState(0);
	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading	/>
	};

	const handleRestartGame = () => {
		setGuessRounds(0);
		setUserNumber(0);
	};

	const handleStartGame = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};
	const handleGameOver = (numberOfRounds: number) => {
		setGuessRounds(numberOfRounds);
	};

	let content = <StartGameScreen onStartGame={handleStartGame} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />;
	} else if (guessRounds > 0) {
		content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={handleRestartGame} />;
	};

  return (
		<SafeAreaView style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
