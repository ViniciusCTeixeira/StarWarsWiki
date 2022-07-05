import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AnimatedSplash from "react-native-animated-splash-screen";

import {Home} from './screens/home'

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
                <SafeAreaProvider>
                    <Home />
                </SafeAreaProvider>
            </AnimatedSplash>
        </ThemeProvider>
    );
}