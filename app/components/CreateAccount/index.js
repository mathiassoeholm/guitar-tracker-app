import React from 'react';
import { View } from 'react-native';

import Header from '../Header';
import Button from '../Button';
import Inputfield from '../InputField';
import styles from './styles';
import svg from '../../assets/images/svg';
import theme from '../../styles/theme';

const CreateAccount = () => (
  <View style={styles.container}>
    <Header
      svgData={svg.electricGuitar}
      minHeightForRest={400}
      title="Create Account"
      titleColor={theme.color.lightText}
    />
    <View style={styles.buttonContainer}>
      <Inputfield
        placeholder="E-mail"
      />
      <Button
        text="GO!"
        style={styles.createButton}
        onPress={() => console.log('Go!')}
      />
    </View>
  </View>
);

export default CreateAccount;
