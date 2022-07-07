import React, { useEffect, useRef, useState } from 'react';
import {ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';

import {getFavoritos} from "../../services/database";

import {FilmsProps} from "../../models/films";

import BackgroundHome from "../../assets/images/backgroud_home.jpg"
import FilmImage from "../../assets/images/film.png";

export const Favorites = () => {

    const [FilmsList, setFilmsList] = useState<FilmsProps[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true)
        getFavoritos().then((res) => {
            setFilmsList(res);
        }).finally(() => {setIsLoading(false)})


    },[reload]);

    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{ flex: 1 }}>
            <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                {isloading ?
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                        Carregando...
                    </Text>
                    :
                    <>
                        <FlatList
                            data={FilmsList}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <TouchableOpacity
                                    onPress={() => {}}
                                    style={{
                                        width: "100%", flexDirection: "row", justifyContent: "center", borderWidth: 3, borderColor: "rgba(255, 255, 255, 0.6)", borderRadius: 50, marginBottom: 10, backgroundColor: "rgba(0, 0, 0, 0.6)"
                                    }}>
                                    <View style={{flex: 0.3, alignItems: 'center', justifyContent: "center"}}>
                                        <Image source={FilmImage} style={{width: 50, height: 50}} />
                                    </View>
                                    <View style={{flex: 0.7, justifyContent: "center"}}>
                                        <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </>
                }
            </View>
        </ImageBackground>
    )
}