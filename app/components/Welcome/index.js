import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import svg from '../../assets/images/svg';
import Button from '../Button';
import Header from '../Header';

// Calculate size of image
const minButtonContainerHeight = 300;

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Header svgData={svg.guitar} minHeightForRest={minButtonContainerHeight} title="Guitar Tracker" />
    <View style={styles.buttonContainer}>
      <Button
        text="CREATE ACCOUNT"
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateAccount')}
      />
      <Button text="LOGIN" style={styles.signInButton} />
    </View>
  </View>
);

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Welcome;
