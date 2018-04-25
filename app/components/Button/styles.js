import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create(
	{
		touchable:
		{
			backgroundColor: theme.color.button,
			borderRadius: 30,
			width: Math.min(380, theme.windowWidth - 30),
			height: 60,
			justifyContent: 'center',
		},

		text:
		{
			textAlign: 'center',
			fontSize: 20,
			color: theme.color.lightText,
			fontWeight: 'bold',
		},
	});

export default styles;
