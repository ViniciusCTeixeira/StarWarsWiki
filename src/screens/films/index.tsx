import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { getFilms } from '../../services/swapi';
import { styles } from './styles';

import {FilmsProps} from "../../models/films";

import BackgroundHome from "../../assets/images/backgroud_home.jpg"

export const Films = () => {

    const [FilmsList, setFilmsList] = useState<FilmsProps[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [filmsItem, setFilmsItem] = useState<FilmsProps>(
        {
            title: "",
            episode_id: null,
            opening_crawl: "",
            director: "",
            producer: "",
            species: [],
            starships: [],
            vehicles: [],
            characters: [],
            planets: [],
            url: "",
            created: "",
            edited: "",
        }
    );

    useEffect(() => {
        getFilms(page).then((res) => {
            setFilmsList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);


    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Filmes
                </Text>


                {loading ?
                    <Text style={styles.cardTitle}>
                        Carregando...
                    </Text>
                    :
                    <>
                        <FlatList
                            data={FilmsList}
                            showsVerticalScrollIndicator={false}

                            renderItem={({ item, index }) => (

                                <>
                                    <View style={styles.textos}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModal(true)
                                                setFilmsItem(item)
                                            }}
                                        >
                                            <Text style={styles.cardTitle}>Título: {item.title}</Text>
                                            <Text style={styles.text}>Produção: {item.producer}</Text>

                                        </TouchableOpacity>


                                    </View>



                                </>
                            )

                            }
                        />

                    </>
                }

            </View>
        </ImageBackground>
    )
}