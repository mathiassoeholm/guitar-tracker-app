import { StyleSheet } from 'react-native';
import theme from  '../../../../../styles/theme';

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
		justifyContent: 'center'
	},

	createButton:
	{
		margin: 10
	},

	signInButton:
	{
		margin: 10,
		backgroundColor: theme.color.accent,
	},
});
