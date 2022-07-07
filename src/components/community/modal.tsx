import React from 'react';
import {TouchableOpacity, View, Modal} from "react-native";
import Styles from "../../assets/styles";
import {Button, Input} from "@rneui/themed";

interface ModalProps {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPosting: React.Dispatch<React.SetStateAction<boolean>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setBody: React.Dispatch<React.SetStateAction<string>>,
    makePost: () => void,
}
export function ModalPost(props: ModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modal}
            onRequestClose={() => {
                props.setModal(false);
                props.setIsPosting(false)
            }}
        >

            <View style={{paddingHorizontal: 10, marginVertical: 10, justifyContent: "center", height: "100%"}}>
                <View style={[Styles.column, {
                    width: "100%",
                    borderRadius: 10,
                    backgroundColor: "rgba(0,0,0,0.65)",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                }]}>
                    <View style={Styles.column}>
                        <Input
                            placeholder='Titulo'
                            leftIcon={{ type: 'material', name: 'title', color: "white" }}
                            placeholderTextColor={"white"}
                            onChangeText={(e)=>{props.setTitle(e)}}
                            inputStyle={{color: "white"}}
                        />
                        <Input
                            placeholder='Descrição'
                            leftIcon={{ type: 'material', name: 'description', color: "white"}}
                            placeholderTextColor={"white"}
                            onChangeText={(e)=>{props.setBody(e)}}
                            inputStyle={{color: "white"}}
                        />
                    </View>
                    <View style={[Styles.row, {width: '100%', justifyContent: "space-between"}]}>
                        <View style={{flex: 0.48}}>
                            <Button
                                title="Postar"
                                loading={false}
                                icon={{
                                    name: 'send',
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
                                onPress={() => {props.makePost()}}
                            />
                        </View>
                        <View style={{flex: 0.48}}>
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
                                    props.setModal(false);
                                    props.setIsPosting(false)
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}