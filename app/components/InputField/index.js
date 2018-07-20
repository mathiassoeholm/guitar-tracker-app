import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';
import theme from '../../styles/theme';

const InputField = (props) => (
  <TextInput
    {...props}
    style={styles.textInput}
    underlineColorAndroid="transparent"
    placeholderTextColor={theme.color.lightText}
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
};

InputField.defaultProps = {
  onChangeText: () => undefined,
  secureTextEntry: false,
  value: undefined,
};

export default InputField;
