import React, { Component } from 'react';
import {
	Animated,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';

class FourthAnimationScreen extends Component {
	static navigationOptions = props => ({
		title: 'Animation #4',
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
		// headerRight: (
		// 	<IconButton
		// 		onPress={() => props.navigation.navigate('AnimatedThree')}
		// 		iconProps={{
		// 			name: 'arrow-forward',
		// 			color: 'white',
		// 			iconStyle: { fontSize: 24 },
		// 			containerStyle: { padding: 10, marginLeft: 10 }
		// 		}}
		// 	/>
		//     )
	});
	componentWillMount() {
		this.interpolateValue = new Animated.Value(0);
		this.animatedScale = new Animated.Value(1);
	}
	componentDidMount() {}

	onPressInBox = () => {
		Animated.timing(this.interpolateValue, {
			toValue: 150,
			duration: 1500
		}).start();
		Animated.spring(this.animatedScale, {
			toValue: 1.5
		}).start();
	};
	onPressOutBox = () => {
		Animated.timing(this.interpolateValue, {
			toValue: 0,
			duration: 1500
		}).start();
		Animated.spring(this.animatedScale, {
			toValue: 1,
			friction: 3,
			tension: 100
		}).start();
	};
	render() {
		const interpolateColor = this.interpolateValue.interpolate({
			inputRange: [0, 150],
			outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
		});
		const animatedStyle = {
			backgroundColor: interpolateColor,
			transform: [{ scale: this.animatedScale }]
		};
		const interpolateTextColor = this.interpolateValue.interpolate({
			inputRange: [0, 150],
			outputRange: ['#fff', '#000']
		});
		const animatedTextStyle = {
			color: interpolateTextColor
		};
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback
					onPressIn={this.onPressInBox}
					onPressOut={this.onPressOutBox}
				>
					<Animated.View style={[styles.box, animatedStyle]}>
						<Animated.Text style={animatedTextStyle}>
							CLICK ME!
						</Animated.Text>
					</Animated.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	box: {
		backgroundColor: '#263238',
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default FourthAnimationScreen;
