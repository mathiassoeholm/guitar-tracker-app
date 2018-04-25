import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export default StyleSheet.create(
{
	container:
	{
		...theme.containerStyle,
		alignItems: 'center'
	},

	title:
	{
		...theme.titleStyle,
		paddingTop: 30
	},

	buttonContainer:
	{
		marginTop: 50,
		flex: 1,
		justifyContent: 'flex-start'
	},

	button:
	{
		...theme.roundedButtonStyle,
		margin: 10
	},

	signInButton:
	{
		...theme.roundedButtonStyle,
		margin: 10,
		backgroundColor: theme.color.accent,
	},
});
