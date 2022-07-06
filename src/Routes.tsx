import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './screens/home'
import {Community} from "./screens/community";

export type propsNavigationStack = {
    Home: undefined
    Community: undefined
    Favoritos: undefined
    Internos: undefined
}

const { Screen, Navigator } = createNativeStackNavigator<propsNavigationStack>();

export function Stack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen name="Home" component={Home} options={{
                    title: 'Star Wars',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
               
                }}/>
                <Screen name="Community" component={Community} options={{ title: 'Comunidade' }}/>
                <Screen name="Favoritos" component={Home}/>
                <Screen name="Internos" component={Home}/>
            </Navigator>
        </NavigationContainer>
    );
}