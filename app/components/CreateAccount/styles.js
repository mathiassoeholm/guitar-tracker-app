import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  container:
  {
    ...theme.containerStyle,
    alignItems: 'center',
    backgroundColor: theme.color.darkBackground,
  },

  buttonContainer:
  {
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
  },

  createButton:
  {
    margin: 10,
  },
});
