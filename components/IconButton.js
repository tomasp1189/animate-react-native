import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const IconButton = props => {
	return (
		<TouchableOpacity
			onPress={() => {
				props.onPress();
			}}
		>
			<Icon {...props.iconProps} />
		</TouchableOpacity>
	);
};

export default IconButton;
