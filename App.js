import React from 'react';
import { Font } from 'expo';
import { SafeAreaView } from 'react-navigation';

import AppRoot from './app/AppRoot';
import { containerStyle } from './styles/theme';

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
			'Mermaid': require('./app/assets/fonts/Mermaid.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render()
	{
		return (
			<SafeAreaView style={containerStyle}>
				{this.state.fontLoaded && <AppRoot/>}
			</SafeAreaView>
		);
	}
}
