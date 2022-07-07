import React, {useContext, useEffect, useState} from 'react';
import {Image, ImageBackground, Modal, ScrollView, TouchableOpacity, View} from "react-native";
import {Text, Button} from '@rneui/themed';

import {sendPost} from "../../services/jsonplaceholder";
import {PostProps} from "../../models/community";

import Styles from "../../assets/styles";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

import {PostCard} from "../../components/community/post"
import {ModalPost} from "../../components/community/modal";

import {ContextoPost} from "../../context/community";

export function Community() {
    const post = useContext(ContextoPost).post;
    const savePost = useContext(ContextoPost).savePost;

    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const [isPosting, setIsPosting] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    function makePost() {
        if (!title || !body) {
            alert("Verifique o formulario!")
        } else {
            setModal(false)
            sendPost(title, body, 1).then((res) => {
                const temp: PostProps = res.data;
                savePost(temp)
            }).catch((err) => {
                alert("Não foi possível salvar o seu post.")
            }).finally(() => {
                setIsPosting(false);
                setTitle("")
                setBody("")
                alert("Postagem feita com sucesso!")
            })
        }

    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
                <ScrollView indicatorStyle={"white"}>
                    <View style={{paddingHorizontal: 10, marginVertical: 10}}>
                        {post.map((item, index) => {
                            return <PostCard id={item.id} title={item.title} body={item.body} userId={item.userId} key={index}/>
                        })}
                    </View>
                </ScrollView>
                <View style={[Styles.column, {width: '100%', paddingHorizontal: 10, paddingVertical: 10}]}>
                    <Button
                        title="Postar"
                        loading={isPosting}
                        icon={{
                            name: 'send',
                            type: 'material',
                            size: 30,
                            color: 'white',
                        }}
                        iconContainerStyle={{marginRight: 10}}
                        buttonStyle={{
                            backgroundColor: 'rgba(50, 50, 120, 0.8)',
                            borderRadius: 50,
                            width: '100%',
                        }}
                        titleStyle={{fontWeight: 'bold', fontSize: 23}}
                        onPress={() => {
                            setModal(true);
                            setIsPosting(true)
                        }}
                    />
                </View>
                <ModalPost modal={modal} setModal={setModal} setIsPosting={setIsPosting} makePost={makePost}
                           setTitle={setTitle} setBody={setBody}/>
            </ImageBackground>
        </View>
    )
}