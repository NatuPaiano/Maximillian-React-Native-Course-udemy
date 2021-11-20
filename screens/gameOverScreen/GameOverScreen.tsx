import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import DefaultStyles from '../../constants/defaultStyles';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton/MainButton.component';

interface IGameOverScreenProps {
	roundsNumber: number,
	userNumber: number,
	onRestart: () => void,
};

const GameOverScreen: React.FC<IGameOverScreenProps> = ({ roundsNumber, userNumber, onRestart }) => (
	<View style={styles.screen}>
		<Text style={DefaultStyles.bodyText}>The Game is Over!</Text>
		<View style={styles.imageContainer}>
			<Image source={require('../../assets/images/success.png')} resizeMode="cover" style={styles.image} />
		</View>
		<View style={styles.resultContainer}>
			<Text style={[DefaultStyles.bodyText, styles.resultText]}>
				Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}.</Text>
			</Text>
		</View>
		<MainButton onPress={onRestart}>NEW GAME</MainButton>
	</View>
); 


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		marginHorizontal: 30,
	},
	resultText: {
		textAlign: 'center',
		fontSize: 20,
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;