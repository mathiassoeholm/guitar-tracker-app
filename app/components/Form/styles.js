import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const  { color, padding, windowWidth, normalize, fontSize, fontFamily } = theme;

const styles = StyleSheet.create(
{
    wrapper:
    {
        justifyContent:"center",
        alignItems:"center"
    },

    errorText:
    {
        color: color.red,
        width: (windowWidth - 45),
        marginTop: 20,
    },

    containerView:
    {
        marginVertical: padding * 3,
        width: windowWidth - 40
    },

    button:
    {
        backgroundColor: "#FF553F",
        height: normalize(55)
    },

    buttonText:
    {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    }
});

export default styles;