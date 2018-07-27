import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

const ErrorText = (props) => (
  props.children
    ? (
      <Text style={styles.errorText}>
        {props.children}
      </Text>
    )
    : null
);

ErrorText.propTypes = {
  children: PropTypes.string,
};

ErrorText.defaultProps = {
  children: undefined,
};

export default ErrorText;
