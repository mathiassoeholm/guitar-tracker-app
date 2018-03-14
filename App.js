import React from 'react';

import AppRoot from './app/AppRoot';

// Apparently this needs to be a class otherwise hot reloading breaks
// Issue: https://github.com/facebook/react-native/issues/10991
export default class App extends React.Component
{
  render()
  {
    return (
      <AppRoot/>
    );
  }
}