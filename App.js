import React from 'react';
import { SafeAreaView, createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator';
import FirstAnimationScreen from './screens/FirstAnimationScreen';

export default class App extends React.Component {
	render() {
		return <Navigator />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#321',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
