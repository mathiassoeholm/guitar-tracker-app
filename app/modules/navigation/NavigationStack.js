import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../auth/scenes/Welcome';
import CreateAccount from '../auth/scenes/CreateAccount';

const NavigationStack = StackNavigator(
    {
        Welcome:
        {
            screen: Welcome
		},
		Login:
        {
            screen: CreateAccount
        },
		CreateAccount:
        {
            screen: CreateAccount
        },
    },
    {
        cardStyle:
        {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
		headerMode: 'none',
		initialRouteName: 'Welcome'
    }
);

export default NavigationStack;
