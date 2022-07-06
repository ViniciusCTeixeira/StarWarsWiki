import React, {useEffect, useState} from 'react';
import {StatusBar, Text, ImageBackground} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

import Styles from "../../assets/styles";

import BackgroundHome from "../../assets/images/backgroud_home.jpg"

import {Button, Skeleton} from "@rneui/themed";

import {getRandomPlanet} from "../../services/swapi";

import {PlanetsProps} from "../../Models/planets";

import {propsNavigationStack} from "../../Routes";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<propsNavigationStack, 'Home'>;

export function Home(props: HomeProps) {
    const [planet, setPlanet] = useState<PlanetsProps>();
    const [loading, setLoading] = useState<boolean>(false);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        setLoading(false)
        getRandomPlanet().then((res) => {
            setPlanet(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() =>{
            setLoading(true)
        })
    }, [reload]);

    return (
        <SafeAreaView style={Styles.container} edges={['top', 'left', 'right']}>
            <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
            <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
                {loading && <Text>{planet.name}</Text>}
            </ImageBackground>
        </SafeAreaView>
    )
}