import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  container:
  {
    ...theme.roundedRectangle,
    borderWidth: 2,
    borderColor: 'black',
  },

  textInput:
  {
    ...theme.roundedRectangle,
    backgroundColor: theme.color.inputField,
    borderWidth: 2,
    borderColor: theme.color.lightText,
    textAlign: 'center',
    color: theme.color.lightText,
  },
});
