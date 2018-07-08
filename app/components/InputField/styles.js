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
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
});
