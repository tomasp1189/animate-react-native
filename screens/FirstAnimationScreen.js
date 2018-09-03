import React, { Component } from 'react';
import {
	Animated,
	Easing,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';

import IconButton from '../components/IconButton';

class FirstAnimationScreen extends Component {
	static navigationOptions = props => ({
		title: 'Animation #1',
		headerBackgroundColor: '#263238',
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
		//TODO => add header controls to navigate between animations.
		headerRight: (
			<IconButton
				onPress={() => props.navigation.navigate('AnimatedTwo')}
				iconProps={{
					name: 'arrow-forward',
					color: 'white',
					iconStyle: { fontSize: 24 },
					containerStyle: { padding: 10, marginLeft: 10 }
				}}
			/>
		)
	});

	componentWillMount() {
		this.animatedOpacity = new Animated.Value(1);
		this.animatedHeight = new Animated.Value(100);
	}
	onPressBox = () => {
		const opacityValue = this.animatedOpacity._value === 1 ? 0.3 : 1;
		const heightValue = this.animatedHeight._value === 100 ? 150 : 100;
		Animated.timing(this.animatedOpacity, {
			toValue: opacityValue,
			duration: 3000,
			easing: Easing.bounce
		}).start();
		Animated.timing(this.animatedHeight, {
			toValue: heightValue,
			duration: 3000,
			easing: Easing.bounce
		}).start();
	};

	render() {
		const animatedStyle = {
			opacity: this.animatedOpacity,
			height: this.animatedHeight
		};
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.onPressBox}>
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
		backgroundColor: '#263238',
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default FirstAnimationScreen;
