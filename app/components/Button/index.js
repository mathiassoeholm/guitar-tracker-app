import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ style, text }) => (
  <TouchableOpacity style={[styles.touchable, style]}>
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes =
{
  style: PropTypes.number,
  text: PropTypes.string.isRequired,
};

Button.defaultProps =
{
  style: 0,
};

export default Button;
