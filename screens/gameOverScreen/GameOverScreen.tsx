import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import DefaultStyles from '../../constants/defaultStyles';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton/MainButton.component';

interface IGameOverScreenProps {
	roundsNumber: number,
	userNumber: number,
	onRestart: () => void,
};

const GameOverScreen: React.FC<IGameOverScreenProps> = ({ roundsNumber, userNumber, onRestart }) => {
	const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
	const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

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

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text style={DefaultStyles.bodyText}>The Game is Over!</Text>
				<View style={{
					...styles.imageContainer,
					//TODO: arreglar y ponerle * 0.25 cuando pueda detectar que está en landscape
					width: availableDeviceWidth * 0.7,
					height: availableDeviceWidth * 0.7,
					borderRadius: (availableDeviceWidth * 0.7) / 2,
					marginVertical: availableDeviceHeight / 30,
				}}>
					<Image source={require('../../assets/images/success.png')} resizeMode="cover" style={styles.image} />
				</View>
				<View style={{...styles.resultContainer, marginVertical: availableDeviceHeight / 60,}}>
					<Text style={{
						...DefaultStyles.bodyText, 
						...styles.resultText,
						fontSize: availableDeviceHeight < 600 ? 16 : 20,
					}}>
						Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}.</Text>
					</Text>
				</View>
				<MainButton onPress={onRestart}>NEW GAME</MainButton>
			</View>
		</ScrollView>
	); 
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	imageContainer: {
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
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
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;