import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Home} from './screens/home'
import {Community} from "./screens/community";

export type propsNavigationStack = {
    Home: undefined
    Community: undefined
    Favorites: undefined
    Internal: undefined
}

const {Screen, Navigator} = createNativeStackNavigator<propsNavigationStack>();

export function Stack() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Screen name="Home" component={Home} options={{title: 'Home'}}/>
                    <Screen name="Community" component={Community} options={{title: 'Comunidade', headerShown: true}}/>
                    <Screen name="Favorites" component={Home} options={{title: 'Favoritos'}}/>
                    <Screen name="Internal" component={Home}/>
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}