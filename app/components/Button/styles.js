import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  touchable:
  {
    ...theme.roundedRectangle,
    backgroundColor: theme.color.button,
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
