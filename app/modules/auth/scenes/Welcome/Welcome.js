import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Welcome = () =>
{
    return (
        <View style={styles.container}>
        <Text >
          Welcome to Guitar Tracker!
        </Text>
      </View>);
};

export default Welcome;