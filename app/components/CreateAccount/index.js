import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uiActions from '../../modules/ui/actions';

import Header from '../Header';
import Button from '../Button';
import Inputfield from '../InputField';
import ErrorText from '../ErrorText';
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
      <ErrorText>
        {props.emailError}
      </ErrorText>
      <Inputfield
        placeholder="Password"
        secureTextEntry
        value={props.password}
        onChangeText={props.changePassword}
      />
      <ErrorText>
        {props.passwordError}
      </ErrorText>
      <ErrorText>
        {props.generalError}
      </ErrorText>
      <Button
        text="GO!"
        onPress={props.pressCreateUser}
      />
    </View>
  </View>
);

CreateAccount.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  pressCreateUser: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  generalError: PropTypes.string,
};

CreateAccount.defaultProps = {
  email: undefined,
  password: undefined,
  emailError: undefined,
  passwordError: undefined,
  generalError: undefined,
};

const mapDispatchToProps = dispatch =>
  ({
    changeEmail: (text) => dispatch(uiActions.changeEmail(text)),
    changePassword: (text) => dispatch(uiActions.changePassword(text)),
    pressCreateUser: () => dispatch(uiActions.pressCreateUser()),
  });

const mapStateToProps = state =>
  ({
    email: state.ui.email,
    password: state.ui.password,
    emailError: state.backend.createUserEmailError,
    passwordError: state.backend.createUserPasswordError,
    generalError: state.backend.createUserGeneralError,
  });

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
