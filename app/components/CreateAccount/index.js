import React from 'react';
import { View } from 'react-native';

import Header from '../Header';
import Button from '../Button';
import styles from './styles';
import svg from '../../assets/images/svg';

const CreateAccount = () => (
  <View style={styles.container}>
    <Header svgData={svg.electricGuitar} minHeightForRest={400} title="Create Account" />
    <View style={styles.buttonContainer}>
      <Button
        text="GO!"
        style={styles.createButton}
        onPress={() => console.log('Go!')}
      />
    </View>
  </View>
);

export default CreateAccount;
