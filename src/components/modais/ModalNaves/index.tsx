import React, { useState } from "react";
import {ImageBackground, Modal, ModalProps, Text, TouchableOpacity, View, Image } from 'react-native';
import { starship } from "../../../screens/starships";
import Naves from "../../../assets/images/naves.png";
import Styles from "../../../assets/styles";
import { Button} from '@rneui/themed';
import BackgroundHome from '../../../assets/images/backgroud_home.jpg'
interface modalProps extends ModalProps{
    item: starship,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    loading: boolean,
    reload: boolean,
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const StarshipModal = ({item, modal, setModal, ...rest}:modalProps) => {

    return <View style={[{
        backgroundColor:"rgba(169,169,169,0.65)"
    }]} >
    <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
            setModal(false)
        }}
    >
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
        <TouchableOpacity onPress={() => setModal(false)}>
        <View style={[Styles.column, {
            width: "100%",
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10
        }]}>
            <View style={Styles.text_center}>
                <Text>{item.name}</Text>
            </View>
            <View style={Styles.divider}/>
            <View style={Styles.text_center}>
                <Image source={Naves} style={{width: 200, height: 200,
                paddingEnd:50}}/>
            </View>
            <View style={Styles.viewText}>
            <Text style={Styles.text2}>Modelo: {item.model }</Text>
            <Text style={Styles.text2}>Fabricante: {item.manufacturer }</Text>
            <Text style={Styles.text2}>Custo: {item.cost_in_credits }</Text>
            <Text style={Styles.text2}>Quantidade de passageiros: {item.passengers }</Text>
            <Text style={Styles.text2}>Capacidade de carga: {item.cargo_capacity }</Text>
            <Text style={Styles.text2}>Consumiveis: {item.consumables }</Text>
            <Text style={Styles.text2}>Comprimento: {item.length }</Text>
            <Text style={Styles.text2}>Velocidade máxima: {item.max_atmosphering_speed }</Text>
            <Text style={Styles.text2}>Quantidade de técnicos: {item.crew}</Text>
            <Text style={Styles.text2}>Classificação: {item.hyperdrive_rating}</Text>
            <Text style={Styles.text2}>MGLT: {item.MGLT }</Text>
            <Text style={Styles.text2}>Classe da nave: {item.starship_class }</Text>
            <Text style={Styles.text2}>Pilotos: {item.pilots }</Text>
            <Text style={Styles.text2}>Filmes: {item.films}</Text>
            <Text style={Styles.text2}>Data de criação: {item.created }</Text>
            <Text style={Styles.text2}>Data de edição: {item.edited}</Text>
            <Text style={Styles.text2}>URL: {item.url}</Text>
            </View>
            </View>
        </TouchableOpacity>
        </ImageBackground>
        </Modal>
        </View>
    
//  //name: string,
//  //model: string,
//  //manufacturer: string,
//  //cost_in_credits: string,
//  length: string,
//  max_atmosphering_speed: string,
//  crew: string,
//  passengers: string,
//  cargo_capacity: string,
//  consumables: string,
//  hyperdrive_rating: string,
//  MGLT: string,
//  starship_class: string,
//  pilots: [],
//  films: [],
//  created: string,
//  edited: string,
//  url: string


}