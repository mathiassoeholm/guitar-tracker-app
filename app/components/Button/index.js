import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ style, text, onPress }) => (
  <TouchableOpacity style={[styles.touchable, style]} onPress={onPress}>
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.number,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: 0,
  onPress: () => undefined,
};

export default Button;
