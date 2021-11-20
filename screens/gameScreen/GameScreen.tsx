import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card/Card.component';
import MainButton from '../../components/MainButton/MainButton.component';
import NumberContainer from '../../components/NumberContainer/NumberContainer.component';
import DefaultStyles from '../../constants/defaultStyles';

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const randomNumber = Math.floor(Math.random() * (max-min)) + min;

		if (randomNumber === exclude) {
			return generateRandomBetween(min, max, exclude);
		} else {
			return randomNumber;
		}
};

interface IGameScreenProps {
	userChoice: number,
	onGameOver: (numberOfRounds: number) => void,
};

const renderListItem = (value: ReactNode, numOfRound: number) => (
	<View key={value} style={styles.listItem}>
		<Text style={DefaultStyles.bodyText}>#{numOfRound}</Text>
		<Text style={DefaultStyles.bodyText}>{value}</Text>
	</View>
);

const GameScreen: React.FC<IGameScreenProps> = ({ userChoice, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setpastGuesses] = useState([initialGuess]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const handleNextGuess = (direction: string) => {
		if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
			Alert.alert('Do not lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
			return;
		};
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		};
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextNumber);
		setpastGuesses((currPastGuesses) => [nextNumber, ...currPastGuesses]);
	};

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		};
	},[currentGuess, userChoice, onGameOver]);

	return (
		<View style={styles.screen}>
			<Text style={DefaultStyles.title}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={() => handleNextGuess('lower')}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
				<MainButton onPress={() => handleNextGuess('greater')}><Ionicons name="md-add" size={24} color="white" /></MainButton>
			</Card>
			<View style={styles.listContainer}>
				<ScrollView contentContainerStyle={styles.list}>
					{pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
				</ScrollView>
			</View>
		</View>
	);
}; 


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '90%',
	},
	listContainer: {
		flex: 1,
		width: '80%',
	},
	list: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	listItem: {
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%',
	},
});

export default GameScreen;