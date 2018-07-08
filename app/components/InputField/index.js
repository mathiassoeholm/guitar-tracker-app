import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

const InputField = (props) => (
  <TextInput
    {...props}
    style={styles.textInput}
    underlineColorAndroid="transparent"
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
};

InputField.defaultProps = {
  onChangeText: () => undefined,
};

export default InputField;
