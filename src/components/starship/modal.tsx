import React from 'react';
import {View, Modal, Image, ImageBackground, ScrollView} from "react-native";
import Styles from "../../assets/styles";
import {Button, Text} from "@rneui/themed";

import { StarshipsProps } from '../../models/starships';
import StarshipsImage from "../../assets/images/naves.png";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

interface ModalStarships {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    starships: StarshipsProps
}

export function ModalStarships(props: ModalStarships) {
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
                                <Text h1>{props.starships.name}</Text>
                            </View>
                            <View style={Styles.divider}/>
                            <View style={Styles.text_center}>
                                <Image source={StarshipsImage} style={{height: 127, width: 211}}/>
                            </View>
                            <Text h4>Modelo: {props.starships.model}</Text>
                            <Text h4>Fabricante: {props.starships.manufacturer}</Text>
                            <Text h4>Custo: {props.starships.cost_in_credits}</Text>
                            <Text h4>Comprimento: {props.starships.length}</Text>
                            <Text h4>Velocidade máxima: {props.starships.max_atmosphering_speed}</Text>
                            <Text h4>Quantidade de técnicos: {props.starships.crew}</Text>
                            <Text h4>Quantidade de passageiros: {props.starships.passengers}</Text>
                            <Text h4>Capacidade de carga: {props.starships.cargo_capacity}</Text>
                            <Text h4>Consumíveis: {props.starships.consumables}</Text>
                            <Text h4>MGLT: {props.starships.MGLT}</Text>
                            <Text h4>Classe da nave: {props.starships.starship_class}</Text>
                            <Text h4>Quantidade de pilotos: {props.starships.pilots.length}</Text>
                            <Text h4>Quantidade de filmes: {props.starships.films.length}</Text>
                            <Text h4>Data de criação: {props.starships.created}</Text>
                            <Text h4>Data de Edição: {props.starships.edited}</Text>
                            <Text h4>Url: {props.starships.url}</Text>

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