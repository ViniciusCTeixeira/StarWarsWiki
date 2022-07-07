import React from 'react';
import {View, Modal, Image, ImageBackground, ScrollView} from "react-native";
import Styles from "../../assets/styles";
import {Button, Text} from "@rneui/themed";

import {VehiclesProps} from "../../models/vehicles";
import VehiclesImage from "../../assets/images/vehicles.png";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

interface ModalProps {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    vehicles: VehiclesProps
}

export function ModalVehicles(props: ModalProps) {
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
                                <Text h1>{props.vehicles.name}</Text>
                            </View>
                            <View style={Styles.divider}/>
                            <View style={Styles.text_center}>
                                <Image source={VehiclesImage} style={{width: 100, height: 100}}/>
                            </View>
                            <Text h4>Modelo: {props.vehicles.model}</Text>
                            <Text h4>Fabricante: {props.vehicles.manufacturer}</Text>
                            <Text h4>Custo em créditos: {props.vehicles.cost_in_credits}</Text>
                            <Text h4>Comprimento: {props.vehicles.length}</Text>
                            <Text h4>Velocidade média da atmosfera: {props.vehicles.max_atmosphering_speed}</Text>
                            <Text h4>Equipe técnica: {props.vehicles.crew}</Text>
                            <Text h4>Passageiros: {props.vehicles.passengers}</Text>
                            <Text h4>Capacidade de carga: {props.vehicles.cargo_capacity}</Text>
                            <Text h4>Consumíveis: {props.vehicles.consumables}</Text>
                            <Text h4>Classe do veículo: {props.vehicles.vehicle_class}</Text>
                            <Text h4>Pilotos: {props.vehicles.pilots.length}</Text>
                            <Text h4>Filmes que apareceu: {props.vehicles.films.length}</Text>

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