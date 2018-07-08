import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';
import theme from '../../styles/theme';
import svg from '../../assets/images/svg';

const CreateAccount = () =>
{
  // Calculate size of image
  const minButtonContainerHeight = 300;
  const titleStyle = StyleSheet.flatten(styles.title);
  const imageSize = Math.min(
    theme.windowWidth,
    theme.windowHeight -
      (titleStyle.fontSize + titleStyle.paddingTop + titleStyle.paddingBottom) -
      minButtonContainerHeight,
  );

    return (
      <View style={styles.container}>
		<Text style={styles.title}>
		Create Account
    </Text>
        <SvgUri
          width={(imageSize).toString()}
          height={(imageSize).toString()}
          svgXmlData={svg.guitar}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={theme.buttonTextStyle}>
              CREATE ACCOUNTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={theme.buttonTextStyle}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>);
};

export default CreateAccount;
