import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uiActions from '../../modules/ui/actions';

import Header from '../Header';
import Button from '../Button';
import Inputfield from '../InputField';
import styles from './styles';
import svg from '../../assets/images/svg';
import theme from '../../styles/theme';

const CreateAccount = (props) => (
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
        value={props.email}
        onChangeText={props.changeEmail}
      />
      <Inputfield
        placeholder="Password"
        secureTextEntry
        value={props.password}
        onChangeText={props.changePassword}
      />
      <Button
        text="GO!"
        onPress={() => console.log('Go!')}
      />
    </View>
  </View>
);

CreateAccount.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};

CreateAccount.defaultProps = {
  email: undefined,
  password: undefined,
};

const mapDispatchToProps = dispatch =>
  ({
    changeEmail: (text) => dispatch(uiActions.changeEmail(text)),
    changePassword: (text) => dispatch(uiActions.changePassword(text)),
  });

const mapStateToProps = state =>
  ({
    email: state.ui.email,
    password: state.ui.password,
  });

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
