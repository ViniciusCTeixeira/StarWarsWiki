import React from 'react';
import {View, Modal, Image, ImageBackground, ScrollView} from "react-native";
import Styles from "../../assets/styles";
import {Button, Text} from "@rneui/themed";

import {PeoplesProps } from '../../models/peoples';
import PeopleImage from "../../assets/images/yoda.png";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

interface ModalProps{
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    people: PeoplesProps
}

export function ModalPeoples(props: ModalProps) {
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
                                <Text h1>{props.people.name}</Text>
                            </View>
                            <View style={Styles.divider}/>
                            <View style={Styles.text_center}>
                                <Image source={PeopleImage} style={{width: 100, height: 100}}/>
                            </View>
                            <Text h4>Ano de nascimento: {props.people.birth_year}</Text>
                            <Text h4>Cor dos olhos: {props.people.eye_color}</Text>
                            <Text h4>Gênero Sexual: {props.people.gender}</Text>
                            <Text h4>Cor de cabelo: {props.people.hair_color}</Text>
                            <Text h4>Altura: {props.people.height}</Text>
                            <Text h4>Peso: {props.people.mass}</Text>
                            <Text h4>Cor da pele: {props.people.skin_color}</Text>
                            <Text h4>Planeta natal: {props.people.homeworld}</Text>
                            <Text h4>Filmes que apareceu: {props.people.films.length}</Text>
                            <Text h4>Quantidade de espécies que apareceram: {props.people.species.length}</Text>
                            <Text h4>Quantidade de naves que apareceram: {props.people.starships.length}</Text>
                            <Text h4>Quantidade de veículos que apareceram: {props.people.vehicles.length}</Text>
                            <Text h4>Url: {props.people.url}</Text>
                            <Text h4>Data de criação: {props.people.created}</Text>
                            <Text h4>Data de edição: {props.people.edited}</Text>

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