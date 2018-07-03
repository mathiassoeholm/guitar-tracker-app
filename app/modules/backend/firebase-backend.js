import firebase from 'firebase';
import config from '../../config';
import authActions from '../auth/actions';

const initialize = () =>
{
  firebase.initializeApp(config.firebase);

  firebase.auth().onAuthStateChanged((user) =>
  {
    if (user)
    {
      // User is signed in
      authActions
    }
    else
    {
      // User is signed out
      console.log('asdf');
    }
  });
};

const createUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export default
{
  initialize,
  createUser,
  signIn,
};
