import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './modules/auth/scenes/Welcome';

const AppRoot = StackNavigator(
    {
        Welcome:
        {
            screen: Welcome
        }
    },
    {
        cardStyle:
        {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        headerMode: 'none' 
    }
);

export default AppRoot;
