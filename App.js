import React from 'react';
import { Font } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';

import NavigationStack from './app/modules/navigation/NavigationStack';
import theme from './styles/theme';
import reduxStore from './app/redux/store';

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
			<Provider store = {reduxStore}>
				<SafeAreaView style={theme.containerStyle}>
					{this.state.fontLoaded && <NavigationStack/>}
				</SafeAreaView>
			</Provider>
		);
	}
}
