import { Dimensions, Platform, StyleSheet } from 'react-native';

const color =
{
	lightBackground: 'white',
	darkBackground: '#8da4cd',
	darkText: '#343434',
	lightText: 'white',
	button: '#657fac',
    accent: '#e57957',
}

const fontSize =
{
    small: 14,
    regular: 15,
    large: 22,
	title: 35,
	button: 20,
}

const fontFamily =
{
    bold: 'RobotoBold',
    medium: 'RobotoMedium',
    regular: 'RobotoRegular',
	light: 'RobotoLight',
	title: 'Mermaid',
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const titleStyle = 
{
	color: color.darkText,
	fontSize: fontSize.title,
	fontFamily: fontFamily.title,
    textAlign: 'center',
	paddingTop: 10,
	paddingBottom: 20,
}

const containerStyle = 
{
	flex: 1,
	backgroundColor: color.lightBackground
}

const roundedButtonStyle =
{
	backgroundColor: color.button,
	borderRadius: 30,
	width: Math.min(380, windowWidth - 30),
	height: 60,
	justifyContent: 'center'
}

const buttonTextStyle =
{
	textAlign: 'center',
	fontSize: fontSize.button,
	color: color.lightText,
	fontWeight: 'bold'
}

export default
{
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
	titleStyle,
	containerStyle,
	roundedButtonStyle,
	buttonTextStyle,
}
