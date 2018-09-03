import { createStackNavigator } from 'react-navigation';
import FirstAnimationScreen from './screens/FirstAnimationScreen';
import SecondAnimationScreen from './screens/SecondAnimationScreen';

export default createStackNavigator(
	{
		// Home: Home,
		AnimatedOne: FirstAnimationScreen,
		AnimatedTwo: SecondAnimationScreen
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
