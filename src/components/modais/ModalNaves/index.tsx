import React, { useState } from "react";
import { Modal, ModalProps, Text, TouchableOpacity, View, Image } from 'react-native';
import { starship } from "../../../screens/starships";
import Naves from "../../../assets/images/naves.png";
import Styles from "../../../assets/styles";
import { Button} from '@rneui/themed';

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
        
        <TouchableOpacity onPress={() => setModal(false)}>
        <View style={[Styles.column, {
            width: "100%",
            borderRadius: 10,
            backgroundColor: "rgba(169,169,169,0.65)",
            paddingHorizontal: 10,
            paddingVertical: 10
        }]}>
            <View style={Styles.text_center}>
                <Text>{item.name}</Text>
            </View>
            <View style={Styles.divider}/>
            <View style={Styles.text_center}>
                <Image source={Naves} style={{width: 100, height: 100}}/>
            </View>
            <Text>Modelo: {item.model }</Text>
            <Text>Model: {item.manufacturer }</Text>
            <Text>Model: {item.cost_in_credits }</Text>
            <Text>Modelo: {item.passengers }</Text>
            <Text>Model: {item.cargo_capacity }</Text>
            <Text>Model: {item.consumables }</Text>
            <Text>Modelo: {item.length }</Text>
            <Text>Model: {item.max_atmosphering_speed }</Text>
            <Text>Model: {item.crew}</Text>
            <Text>Model: {item.hyperdrive_rating}</Text>
            <Text>Model: {item.MGLT }</Text>
            <Text>Modelo: {item.starship_class }</Text>
            <Text>Model: {item.pilots }</Text>
            <Text>Model: {item.films}</Text>
            <Text>Modelo: {item.created }</Text>
            <Text>Model: {item.edited}</Text>
            <Text>Model: {item.url}</Text>
        </View>
        </TouchableOpacity>
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