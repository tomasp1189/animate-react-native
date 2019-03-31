import React, { Component } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';

class ThirdAnimationScreen extends Component {
	static navigationOptions = props => ({
		title: 'Animation #3',
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
		headerRight: (
			<IconButton
				onPress={() => props.navigation.navigate('AnimatedFour')}
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
		this.panValue = new Animated.ValueXY();
		this.scaleValue = new Animated.Value(1);
		this._value = { x: 0, y: 0 };
		this.panValue.addListener(value => (this._value = value));
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderGrant: (e, gestureState) => {
				this.panValue.setOffset({ x: this._value.x, y: this._value.y });
				this.panValue.setValue({ x: 0, y: 0 });
				Animated.spring(this.scaleValue, {
					toValue: 1.1,
					friction: 3
				}).start();
			},
			onPanResponderMove: Animated.event([
				null,
				{ dx: this.panValue.x, dy: this.panValue.y }
			]),
			onPanResponderRelease: (e, gestureState) => {
				this.panValue.flattenOffset();
				Animated.decay(this.panValue, {
					deceleration: 0.997,
					velocity: { x: gestureState.vx, y: gestureState.vy }
				}).start();
				Animated.spring(this.scaleValue, { toValue: 1, friction: 3 }).start();
			}
		});
	}

	render() {
		let rotate = '0deg';
		let animatedStyle = {
			transform: [
				...this.panValue.getTranslateTransform(),
				{ rotate },
				{ scale: this.scaleValue }
			]
		};
		return (
			<View style={styles.container}>
				<Animated.View
					style={[styles.box, animatedStyle]}
					{...this.panResponder.panHandlers}
				>
					<Text
						style={{
							color: '#fff'
						}}
					>
						DRAG ME!
					</Text>
				</Animated.View>
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

export default ThirdAnimationScreen;
