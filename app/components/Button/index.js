import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ style, text }) =>
{
	return (
		<TouchableOpacity style={[styles.touchable, style]}>
            <Text style={styles.text}>
              {text}
            </Text>
		</TouchableOpacity>
	);
};

Button.propTypes =
{
	style: View.propTypes.style,
	text: PropTypes.string.isRequired,
};

export default Button;
