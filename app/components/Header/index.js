import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../styles/theme';
import styles from './styles';

const Header = ({ svgData, minHeightForRest, title }) => {
  const titleStyle = StyleSheet.flatten(styles.title);
  const imageSize = Math.min(
    theme.windowWidth,
    theme.windowHeight
      - (titleStyle.fontSize + titleStyle.paddingTop + titleStyle.paddingBottom)
      - minHeightForRest,
  );

  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
      <SvgUri
        width={(imageSize).toString()}
        height={(imageSize).toString()}
        svgXmlData={svgData}
      />
    </View>
  );
};

Header.propTypes = {
  svgData: PropTypes.string.isRequired,
  minHeightForRest: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
