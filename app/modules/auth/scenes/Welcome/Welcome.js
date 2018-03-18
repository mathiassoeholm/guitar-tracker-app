import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';
import { windowWidth, windowHeight } from '../../../../../styles/theme';
import svg from '../../../../assets/images/svg';

const Welcome = () =>
{
	// Calculate size of image
	const minButtonContainerHeight = 400;
	const titleStyle = StyleSheet.flatten(styles.title);
	const imageSize = Math.min(
		windowWidth,
		windowHeight - (titleStyle.fontSize + titleStyle.paddingTop) - minButtonContainerHeight);

	console.log(imageSize);

    return (
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
          <TouchableOpacity style={styles.button}>
            <Text>
              Test
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>
              Test
            </Text>
          </TouchableOpacity>
        </View>
      </View>);
};

export default Welcome;
