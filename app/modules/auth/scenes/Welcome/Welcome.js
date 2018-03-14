import React from 'react';
import { View, Text } from 'react-native';
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
          style={styles.image}
          width="200"
          height="200"
          svgXmlData={svg.guitar}
        />
      </View>);
};

export default Welcome;