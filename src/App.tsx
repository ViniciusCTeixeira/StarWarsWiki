import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@rneui/themed';
import {SafeAreaView, StatusBar} from "react-native";

import AnimatedSplash from "react-native-animated-splash-screen";

import {Stack} from "./Routes";


import Logo from './assets/images/logo.png'

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
                <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
                <Stack/>
            </AnimatedSplash>
        </ThemeProvider>
    );
}