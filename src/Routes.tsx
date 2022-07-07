import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from "react-native";


import rocket from './assets/icons/rocket.png'
import planet from './assets/icons/planet.png'
import people from './assets/icons/people.png'
import movie from './assets/icons/movie.png'
import vehicles from './assets/icons/vehicles.png'

import { Home } from './screens/home'
import { Community } from "./screens/community";
import { StatusBar } from "react-native";
import { Films } from "./screens/films";
import { Planets } from "./screens/planets";
import { Peoples } from "./screens/peoples";
import { Vehicles } from "./screens/vehicles";
import { Starship } from "./screens/starships";
import { Favorites } from "./screens/favorites";

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
            <StatusBar backgroundColor="rgb(50, 50, 120)" barStyle="light-content" />
            <NavigationContainer>
                <StackNav.Navigator initialRouteName="Home" screenOptions={{
                    headerStyle: {
                        backgroundColor: '#000',

                    }, headerShown: false,
                    headerTintColor: "#fff"
                }}>
                    <StackNav.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                    <StackNav.Screen name="Community" component={Community} options={{ title: 'Comunidade', headerShown: true }} />
                    <StackNav.Screen name="Favorites" component={Favorites} options={{ title: 'Favoritos', headerShown: true }} />
                    <StackNav.Screen name="Internal" component={Tab} options={{
                        title: 'Navegação', headerShown: true
                    }} />
                </StackNav.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

function Tab() {
    return (
        <TabNav.Navigator initialRouteName="Planets" screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 },
            tabBarActiveTintColor: 'rgb(50, 50, 120)',
            tabBarInactiveTintColor: "#aaaa"
        }}>
            <TabNav.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image resizeMode="contain"
                        style={{ marginTop: 15, width: 25, tintColor: color }}
                        source={planet} />
                )


            }} name="Planets" component={Planets} />
            <TabNav.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image resizeMode="contain"
                        style={{ marginTop: 15, width: 25, tintColor: color }}
                        source={people} />
                )


            }} name="People" component={Peoples} />
            <TabNav.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image resizeMode="contain"
                        style={{ marginTop: 15, width: 25, tintColor: color }}
                        source={movie} />
                )

            }} name="Films" component={Films} />
            <TabNav.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image resizeMode="contain"
                        style={{ marginTop: 15, width: 25, tintColor: color }}
                        source={rocket} />
                )
            }} name="Starships" component={Starship} />
            <TabNav.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image resizeMode="contain"
                        style={{ marginTop: 15, width: 25, tintColor: color }}
                        source={vehicles} />
                )

            }} name="Vehicles" component={Vehicles} />
        </TabNav.Navigator>
    );
}