import React, {useEffect, useState} from 'react';
import {ImageBackground, View, ScrollView, Image} from "react-native";
import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

import Styles from "../../assets/styles";
import LogoImage from "../../assets/images/logo.png";

import BackgroundHome from "../../assets/images/backgroud_home.jpg";

import {CardPlanet} from "../../components/planets/card";

import {getRandomPlanet} from "../../services/swapi";

import {PlanetsProps} from "../../models/planets";

import {propsNavigationStack} from "../../Routes";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<propsNavigationStack, 'Home'>;

export function Home(props: HomeProps) {
    const [planet, setPlanet] = useState<PlanetsProps>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        setLoading(false)
        getRandomPlanet().then((res) => {
            setPlanet(res.data);
            setIsLoading(true);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(true)
        })
    }, [reload]);

    return (
        <SafeAreaView style={Styles.container} edges={['top', 'left', 'right']}>
            <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 10, marginVertical: 10}}>
                        <View style={Styles.text_center}>
                            <Image source={LogoImage} style={{width: 100, height: 100}}/>
                        </View>
                        {isLoading && <CardPlanet planet={planet} reload={reload} setReload={setReload} loading={loading}/>}
                        <View style={[Styles.column, {width: '100%', marginVertical: 10}]}>
                            <View style={[Styles.row, {width: '100%', justifyContent: "space-between"}]}>
                                <View style={{flex: 0.48}}>
                                    <Button
                                        title="Favoritos"
                                        loading={false}
                                        buttonStyle={{
                                            backgroundColor: 'rgba(50, 50, 120, 0.8)',
                                            borderRadius: 5,
                                            marginTop: 10,
                                            width: '100%',
                                            height: 100
                                        }}
                                        titleStyle={{fontWeight: 'bold', fontSize: 23}}
                                        onPress={() => {props.navigation.navigate("Favorites")}}
                                    />
                                </View>
                                <View style={{flex: 0.48}}>
                                    <Button
                                        title="Comunidade"
                                        loading={false}
                                        buttonStyle={{
                                            backgroundColor: 'rgba(50, 50, 120, 0.8)',
                                            borderRadius: 5,
                                            marginTop: 10,
                                            width: '100%',
                                            height: 100
                                        }}
                                        titleStyle={{fontWeight: 'bold', fontSize: 23}}
                                        onPress={() => {props.navigation.navigate("Community")}}
                                    />
                                </View>
                            </View>
                            <Button
                                title="Navegar"
                                loading={false}
                                icon={{
                                    name: 'search',
                                    type: 'material',
                                    size: 30,
                                    color: 'white',
                                }}
                                iconContainerStyle={{ marginRight: 10 }}
                                buttonStyle={{
                                    backgroundColor: 'rgba(50, 50, 120, 0.8)',
                                    borderRadius: 5,
                                    marginTop: 10,
                                    height: 60
                                }}
                                titleStyle={{fontWeight: 'bold', fontSize: 23}}
                                onPress={() => {props.navigation.navigate("Internal")}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}