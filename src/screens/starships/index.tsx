import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import { Icon } from "@rneui/themed";

import Styles from "../../assets/styles";

import {getStarships} from '../../services/swapi';

import BackgroundHome from '../../assets/images/backgroud_home.jpg'
import StarshipsImage from "../../assets/images/naves.png"
import {ModalStarships} from "../../components/starship/modal";

import { StarshipsProps } from '../../models/starships';

export const Starship = () => {

    const [StarshipsList, setStarshipsList] = useState<StarshipsProps[]>([]);
    const [starships, setStarships] = useState<StarshipsProps>();
    const [page, setPage] = useState<string>("");
    const [nextPage, setNextPage] = useState<string>();
    const [backPage, setBackPage] = useState<string>();
    const [isloading, setIsLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true)
        getStarships(page).then((res) => {
            setStarshipsList(res.data.results);
            res.data.next ? setNextPage(res.data.next.match(/\d+/)[0]) : null
            res.data.previous ? setBackPage(res.data.previous.match(/\d+/)[0]) : null
        }).catch((err) => {
            console.log(err)
        }).finally(() => setIsLoading(false))
    }, [page]);


    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
            <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                    <View style={{justifyContent: "center"}}>
                        {backPage && <TouchableOpacity onPress={() => setPage(backPage)}><Icon name='west' type='material' size={30} color='white' /></TouchableOpacity>}
                    </View>
                    <View style={{justifyContent: "center"}}>
                        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Naves</Text>
                    </View>
                    <View style={{justifyContent: "center"}}>
                        {nextPage && <TouchableOpacity onPress={() => setPage(nextPage)}><Icon name='east' type='material' size={30} color='white' /></TouchableOpacity>}
                    </View>
                </View>
                <View style={Styles.divider} />

                {isloading ?
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                        Carregando...
                    </Text>
                    :
                    <>
                        <FlatList
                            data={StarshipsList}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <TouchableOpacity
                                    onPress={() => {setStarships(item); setModal(true)}}
                                    style={{
                                        width: "100%", flexDirection: "row", justifyContent: "center", borderWidth: 3, borderColor: "rgba(255, 255, 255, 0.6)", borderRadius: 50, marginBottom: 10, paddingVertical: 10, backgroundColor: "rgba(0, 0, 0, 0.6)"
                                    }}>
                                    <View style={{flex: 0.3, alignItems: 'center', justifyContent: "center"}}>
                                        <Image source={StarshipsImage} style={{height: 34, width: 56}} />
                                    </View>
                                    <View style={{flex: 0.7, justifyContent: "center"}}>
                                        <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />

                    </>
                }
                {starships && <ModalStarships modal={modal} setModal={setModal} starships={starships}/>}
            </View>
        </ImageBackground>
    )
}