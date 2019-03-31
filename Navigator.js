import { createStackNavigator } from 'react-navigation';
import FirstAnimationScreen from './screens/FirstAnimationScreen';
import SecondAnimationScreen from './screens/SecondAnimationScreen';
import ThirdAnimationScreen from './screens/ThirdAnimationScreen';
import FourthAnimationScreen from './screens/FourthAnimationScreen';

export default createStackNavigator(
	{
		// Home: Home,
		AnimatedOne: FirstAnimationScreen,
		AnimatedTwo: SecondAnimationScreen,
		AnimatedThree: ThirdAnimationScreen,
		AnimatedFour: FourthAnimationScreen
	},
	{
		initialRouteName: 'AnimatedOne',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#333'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);
