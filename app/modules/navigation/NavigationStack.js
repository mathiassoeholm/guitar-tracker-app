import { Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Welcome from '../../components/Welcome';
import CreateAccount from '../../components/CreateAccount';

const NavigationStack = createStackNavigator(
  {
    Welcome,
    Login: CreateAccount,
    CreateAccount,
  },
  {
    cardStyle:
    {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    headerMode: 'none',
    initialRouteName: 'Welcome',
  },
);

export default NavigationStack;
