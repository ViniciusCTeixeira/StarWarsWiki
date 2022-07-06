import React from 'react';
import {Text, Button} from '@rneui/themed';
import {View, Image} from "react-native";

import Styles from "../../assets/styles";

import PlanetImage from "../../assets/images/planet.png";

import {PlanetsProps} from "../../models/planets";

interface CardHomeProps {
    planet: PlanetsProps,
    loading: boolean,
    reload: boolean,
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export function CardPlanet(props: CardHomeProps) {
    return (
        <View style={[Styles.column, {
            width: "100%",
            borderRadius: 10,
            backgroundColor: "rgba(169,169,169,0.65)",
            paddingHorizontal: 10,
            paddingVertical: 10
        }]}>
            <View style={Styles.text_center}>
                <Text h1>{props.planet.name}</Text>
            </View>
            <View style={Styles.divider}/>
            <View style={Styles.text_center}>
                <Image source={PlanetImage} style={{width: 100, height: 100}}/>
            </View>
            <Text h4>População: {props.planet.population}</Text>
            <Text h4>Clima: {props.planet.climate}</Text>
            <Text h4>Terreno: {props.planet.terrain}</Text>
            <Text h4>Água superficial: {props.planet.surface_water === "unknown" ? props.planet.surface_water : `${props.planet.surface_water}%`}</Text>

            <View style={[Styles.row, {width: '100%', justifyContent: "space-between"}]}>
                <View style={{flex: 0.48}}>
                    <Button
                        loading={!props.loading}
                        icon={{
                            name: 'refresh',
                            type: 'material',
                            size: 30,
                            color: 'white',
                        }}
                        buttonStyle={{
                            backgroundColor: 'rgba(50, 50, 120, 0.8)',
                            borderRadius: 5,
                            marginTop: 10,
                            width: '100%',
                        }}
                        titleStyle={{fontWeight: 'bold', fontSize: 23}}
                        onPress={() => {props.setReload(!props.reload)}}
                    />
                </View>
                <View style={{flex: 0.48}}>
                    <Button
                        loading={false}
                        icon={{
                            name: 'info',
                            type: 'material',
                            size: 30,
                            color: 'white',
                        }}
                        buttonStyle={{
                            backgroundColor: 'rgba(50, 50, 120, 0.8)',
                            borderRadius: 5,
                            marginTop: 10,
                            width: '100%',
                        }}
                        titleStyle={{fontWeight: 'bold', fontSize: 23}}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </View>
    )
}