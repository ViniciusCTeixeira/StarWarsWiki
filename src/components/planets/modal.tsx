import React from 'react';
import {View, Modal, Image, ImageBackground, ScrollView} from "react-native";
import Styles from "../../assets/styles";
import {Button, Text} from "@rneui/themed";

import {PlanetsProps} from "../../models/planets";
import PlanetImage from "../../assets/images/planet.png";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

interface ModalProps {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    planet: PlanetsProps
}

export function ModalPlanets(props: ModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modal}
            onRequestClose={() => {
                props.setModal(false);
            }}

        >
            <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
                <View style={{paddingHorizontal: 10, marginVertical: 10, justifyContent: "center", height: "100%"}}>
                    <View style={[Styles.column, {
                        width: "100%",
                        borderRadius: 10,
                        backgroundColor: "rgba(169,169,169,0.65)",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                    }]}>
                        <ScrollView>
                            <View style={Styles.text_center}>
                                <Text h1>{props.planet.name}</Text>
                            </View>
                            <View style={Styles.divider}/>
                            <View style={Styles.text_center}>
                                <Image source={PlanetImage} style={{width: 100, height: 100}}/>
                            </View>
                            <Text h4>Diametro: {props.planet.diameter}</Text>
                            <Text h4>Periodo de rotação: {props.planet.rotation_period}</Text>
                            <Text h4>Periodo orbital: {props.planet.orbital_period}</Text>
                            <Text h4>Gravidade: {props.planet.gravity}</Text>
                            <Text h4>População: {props.planet.population}</Text>
                            <Text h4>Clima: {props.planet.climate}</Text>
                            <Text h4>Terreno: {props.planet.terrain}</Text>
                            <Text h4>Água superficial: {props.planet.surface_water === "unknown" ? props.planet.surface_water : `${props.planet.surface_water}%`}</Text>
                            <Text h4>Residentes Importantes: {props.planet.residents.length}</Text>
                            <Text h4>Filmes que apareceu: {props.planet.films.length}</Text>

                            <Button
                                title="Fechar"
                                loading={false}
                                icon={{
                                    name: 'cancel',
                                    type: 'material',
                                    size: 30,
                                    color: 'white',
                                }}
                                iconContainerStyle={{marginRight: 10}}
                                buttonStyle={{
                                    backgroundColor: 'rgba(50, 50, 120, 0.8)',
                                    borderRadius: 5,
                                    marginTop: 10,
                                    width: '100%',
                                }}
                                titleStyle={{fontWeight: 'bold', fontSize: 23}}
                                onPress={() => {
                                    props.setModal(false)
                                }}
                            />
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    )
}