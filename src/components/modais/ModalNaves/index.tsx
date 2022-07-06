import React, { useState } from "react";
import { Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import { starship } from "../../../screens/starships";


interface modalProps extends ModalProps {
    item: starship,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export const StarshipModal = ({item, modal, setModal, ...rest}:modalProps) => {

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(false)
        }}
    >
        <TouchableOpacity onPress={() => setModal(false)}>
            <View style={{ backgroundColor: 'red', height: 200, width: '100%' }}>
                <Text style={{ color: 'white' }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    </Modal>



}