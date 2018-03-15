import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';
import svg from '../../../../assets/images/svg';

const Welcome = () =>
{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Guitar Tracker
        </Text>
        <SvgUri
          style={{padding: 30}}
          width="200"
          height="200"
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
