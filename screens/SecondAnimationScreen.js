import React, { Component } from 'react';
import {
	Animated,
	Easing,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';

class SecondAnimationScreen extends Component {
	static navigationOptions = props => ({
		title: 'Animation #2',
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
		// headerRight: (
		// 	<IconButton
		// 		onPress={() => props.navigation.navigate('AnimatedTwo')}
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
		this.animatedScale = new Animated.Value(1);
	}
	onPressInBox = () => {
		Animated.spring(this.animatedScale, {
			toValue: 0.5
		}).start();
	};
	onPressOutBox = () => {
		Animated.spring(this.animatedScale, {
			toValue: 1,
            friction: 3,
            tension:100
		}).start();
	};

	render() {
		const animatedStyle = {
			transform: [{ scale: this.animatedScale }]
		};
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback
					onPressIn={this.onPressInBox}
					onPressOut={this.onPressOutBox}
				>
					<Animated.View style={[styles.box, animatedStyle]}>
						<Text
							style={{
								color: '#fff'
							}}
						>
							CLICK ME!
						</Text>
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
		backgroundColor: '#333',
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default SecondAnimationScreen;
