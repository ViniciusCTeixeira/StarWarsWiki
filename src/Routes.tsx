import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Home} from './screens/home'
import {Community} from "./screens/community";
import {StatusBar} from "react-native";
import {Films} from "./screens/films";
import {Planets} from "./screens/planets";
import {Peoples} from "./screens/peoples";
import {Vehicles} from "./screens/vehicles";
import {Starship} from "./screens/starships";

export type propsNavigationStack = {
    Home: undefined
    Community: undefined
    Favorites: undefined
    Internal: undefined
}
export type propsNavigationTab = {
    Films: undefined
    People: undefined
    Planets: undefined
    Starships: undefined
    Vehicles: undefined
}

const TabNav = createBottomTabNavigator<propsNavigationTab>();
const StackNav = createNativeStackNavigator<propsNavigationStack>();

export function Stack() {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="rgb(50, 50, 120)" barStyle="light-content"/>
            <NavigationContainer>
                <StackNav.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <StackNav.Screen name="Home" component={Home} options={{title: 'Home'}}/>
                    <StackNav.Screen name="Community" component={Community} options={{title: 'Comunidade', headerShown: true}}/>
                    <StackNav.Screen name="Favorites" component={Home} options={{title: 'Favoritos', headerShown: true}}/>
                    <StackNav.Screen name="Internal" component={Tab} options={{title: 'Navegação', headerShown: true}}/>
                </StackNav.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

function Tab() {
    return (
        <TabNav.Navigator initialRouteName="Planets" screenOptions={{headerShown: false}}>
            <TabNav.Screen name="Planets" component={Planets} />
            <TabNav.Screen name="People" component={Peoples} />
            <TabNav.Screen name="Films" component={Films} />
            <TabNav.Screen name="Starships" component={Starship} />
            <TabNav.Screen name="Vehicles" component={Vehicles} />
        </TabNav.Navigator>
    );
}