import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderIconButton = props => {
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

export default HeaderIconButton;
