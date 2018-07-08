import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import PropTypes from 'prop-types';

import styles from './styles';
import theme from '../../styles/theme';
import svg from '../../assets/images/svg';
import Button from '../Button';

// Calculate size of image
const minButtonContainerHeight = 300;
const titleStyle = StyleSheet.flatten(styles.title);
const imageSize = Math.min(
  theme.windowWidth,
  theme.windowHeight
    - (titleStyle.fontSize + titleStyle.paddingTop + titleStyle.paddingBottom)
    - minButtonContainerHeight,
);

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
    Guitar Tracker
    </Text>
    <SvgUri
      width={(imageSize).toString()}
      height={(imageSize).toString()}
      svgXmlData={svg.guitar}
    />
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
