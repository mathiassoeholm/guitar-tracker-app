import React from 'react';
import { Font } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';

import NavigationStack from './app/modules/navigation/NavigationStack';
import theme from './app/styles/theme';
import firebaseBackend from './app/modules/backend/firebase-backend';
import makeStore from './app/redux/store';

const mermaidFont = require('./app/assets/fonts/Mermaid.ttf');

// Apparently this needs to be a class otherwise hot reloading breaks
// Issue: https://github.com/facebook/react-native/issues/10991
export default class App extends React.Component
{
  state =
  {
    fontLoaded: false,
  };

  async componentDidMount()
  {
    await Font.loadAsync({
      Mermaid: mermaidFont,
    });

    // We purposefully trigger a re-render
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ fontLoaded: true });
  }

  store = makeStore(firebaseBackend);

  render()
  {
    return (
      <Provider store={this.store}>
        <SafeAreaView style={theme.containerStyle}>
          {this.state.fontLoaded && <NavigationStack />}
        </SafeAreaView>
      </Provider>
    );
  }
}
