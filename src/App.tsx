import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@rneui/themed';
import {View, StatusBar} from "react-native";

import AnimatedSplash from "react-native-animated-splash-screen";

import {Stack} from "./Routes";
import { Starship } from './screens/starships';
import { Vehicles } from './screens/vehicles';
import { Films } from './screens/films';
import { People } from './screens/people';
import { Planets } from './screens/planets';

import Logo from './assets/images/logo.png'
import {ProvedorPost} from "./context/community";

export default function App() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000)
    });

    return (
        <ThemeProvider>
            <AnimatedSplash
                translucent={true}
                isLoaded={isLoaded}
                logoImage={Logo}
                backgroundColor={"#262626"}
                logoHeight={150}
                logoWidth={150}
            >
                <ProvedorPost>
                    <Stack/>
                </ProvedorPost>
            </AnimatedSplash>
        </ThemeProvider>
    );
}