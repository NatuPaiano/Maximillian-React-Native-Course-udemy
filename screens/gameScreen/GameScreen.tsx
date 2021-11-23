import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
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
	const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
	const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
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
		const updateLayout = () => {
			setAvailableDeviceWidth(Dimensions.get('window').width);
			setAvailableDeviceHeight(Dimensions.get('window').height);
		};
		Dimensions.addEventListener('change', updateLayout);

		return () => {
			Dimensions.removeEventListener('change', updateLayout);
		};
	}, []);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		};
	},[currentGuess, userChoice, onGameOver]);

	if (availableDeviceHeight < 500) {
		return (
			<View style={styles.screen}>
				<Text style={DefaultStyles.title}>Opponent's Guess</Text>
				<View style={styles.controls}>
					<MainButton onPress={() => handleNextGuess('lower')}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<MainButton onPress={() => handleNextGuess('greater')}><Ionicons name="md-add" size={24} color="white" /></MainButton>
				</View>
				<View style={{...styles.listContainer, width: availableDeviceWidth > 350 ? '60%' : '80%'}}>
					<ScrollView contentContainerStyle={styles.list}>
						{pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
					</ScrollView>
				</View>
		</View>
		);
	};

	return (
		<View style={styles.screen}>
			<Text style={DefaultStyles.title}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={() => handleNextGuess('lower')}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
				<MainButton onPress={() => handleNextGuess('greater')}><Ionicons name="md-add" size={24} color="white" /></MainButton>
			</Card>
			<View style={{...styles.listContainer, width: availableDeviceWidth > 350 ? '60%' : '80%'}}>
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
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '80%',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
		width: 300,
		maxWidth: '90%',
	},
	listContainer: {
		flex: 1,
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
		width: '100%',
	},
});

export default GameScreen;