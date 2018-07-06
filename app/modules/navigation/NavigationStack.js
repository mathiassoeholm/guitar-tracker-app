import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../../components/Welcome';
import CreateAccount from '../../components/CreateAccount';

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
