import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import Card from '../../components/Card/Card.component';
import Input from '../../components/Input/Input.component';
import MainButton from '../../components/MainButton/MainButton.component';
import NumberContainer from '../../components/NumberContainer/NumberContainer.component';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/defaultStyles';

interface IStartGameScreenProps {
	onStartGame: (selectedNumber: number) => void,
};

const StartGameScreen: React.FC<IStartGameScreenProps> = ({ onStartGame }) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelecterNumber] = useState(0);

	const handleInputChange = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};
	const handleResetInput = () => {
		setEnteredValue('');
		setConfirmed(false);
	};
	const handleConfirmInput = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 99.',
				[{ text: 'Okay', style: 'destructive', onPress: handleResetInput }],
			);
			return;
		};

		setConfirmed(true);
		setSelecterNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text style={DefaultStyles.bodyText}>You Selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<MainButton onPress={() => onStartGame(selectedNumber)}>START GAME</MainButton>
			</Card>
		);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={[styles.title, DefaultStyles.title]}>Start a new Game!</Text>
				<Card style={styles.inputContainer}>
					<Text style={DefaultStyles.bodyText}>Select a number</Text>
					<Input 
						style={styles.input}
						onChangeText={handleInputChange}
						value={enteredValue}
						blurOnSubmit autoCapitalize='none'
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
					/>
					<View style={styles.buttonsContainer}>
						<View style={styles.button}> 
							<Button title="Reset" onPress={handleResetInput} color={Colors.accent} />
						</View>
						<View style={styles.button}>
							<Button title="Confirm" onPress={handleConfirmInput} color={Colors.primary} />
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
}; 

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: 'open-sans-bold',
	},
	inputContainer: {
		width: '80%',
		minWidth: 300,
		maxWidth: '95%',
		alignItems: 'center',
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: Dimensions.get('window').width / 4,
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	}
});

export default StartGameScreen;