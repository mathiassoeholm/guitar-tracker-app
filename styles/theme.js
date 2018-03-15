import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;

const normalize = (fontSize) =>
{
    return Math.round(fontSize * realWidth / 375);
}

const color =
{
    black: "rgba(0,0,0,.84)",
    light_black: "#414141",
    main: "rgb(99,139,250)",
    white: "#ffffff",
    light_grey: "#eaeaea",
    grey: "#ccc",
    red: "red"
}

const fontSize =
{
    small: normalize(14),
    regular: normalize(15),
    large: normalize(22),
    title: normalize(40)
}

const fontFamily =
{
    bold: "RobotoBold",
    medium: "RobotoMedium",
    regular: "RobotoRegular",
    light: "RobotoLight",
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const titleStyle = 
{
    fontSize: fontSize.title,
    textAlign: 'center',
    paddingTop: 10
}

const roundedButtonStyle =
{
	borderRadius: 30,
	width: Math.min(380, windowWidth - 30),
	height: 60
}

export
{
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    normalize,
	titleStyle,
	roundedButtonStyle
}
