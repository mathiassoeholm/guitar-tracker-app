import { StyleSheet } from 'react-native';
import { fontSize, titleStyle, roundedButtonStyle } from  '../../../../../styles/theme';

export default StyleSheet.create(
{
    container:
    {
        flex: 1,
        alignItems: 'center'
    },

    title: titleStyle,

    image:
    {
		padding: 20,
		width: 200,
		height: 200
	},

	buttonContainer:
	{
		marginTop: 50,
		flex: 1,
		justifyContent: 'flex-start'
	},

	button:
	{
		...roundedButtonStyle,
		backgroundColor: 'red',
		margin: 10,
		textAlign: 'center'
	}
});
