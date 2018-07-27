import firebase from 'firebase';
import config from '../../config';

const initialize = () =>
  firebase.initializeApp(config.firebase);

const setAuthStateChangedListener = (listener) =>
  firebase.auth().onAuthStateChanged(listener);

const createUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export default
{
  initialize,
  setAuthStateChangedListener,
  createUser,
  signIn,
};
