import React from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import DefaultStyles from '../../constants/defaultStyles';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton/MainButton.component';

interface IGameOverScreenProps {
	roundsNumber: number,
	userNumber: number,
	onRestart: () => void,
};

const GameOverScreen: React.FC<IGameOverScreenProps> = ({ roundsNumber, userNumber, onRestart }) => (
	<ScrollView>
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
	</ScrollView>
); 


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderRadius: Dimensions.get('window').width * 0.7 / 2,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height / 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		marginHorizontal: 30,
		marginVertical: Dimensions.get('window').height / 60,
	},
	resultText: {
		textAlign: 'center',
		fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;