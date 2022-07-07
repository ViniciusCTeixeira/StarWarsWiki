import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { Botao } from '../../components/Botao';
import { getPlanet} from '../../services/swapi';
import { styles } from './styles';

import BackgroundHome from "../../assets/images/backgroud_home.jpg"


export interface Planets {
    name: string,
    diameter: string,
    rotation_period: string,
    orbital_period: string,
    gravity: string,
    population: string,
    climate: string,
    terrain: string,
    surface_water: string,
    residents:[],
    films: [],
    url: string,
    created: string,
    edited: string,
}

export const Planets = () => {

    const [PlanetsList, setPlanetsList] = useState<Planets[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [flanetsItem, setPlanetsItem] = useState<Planets>(
        {
            name: "",
            diameter: "",
            rotation_period: "",
            orbital_period: "",
            gravity: "",
            population: "",
            climate: "",
            terrain: "",
            surface_water: "",
            residents: [],
            films: [],
            url: "",
            created: "",
            edited: "",
        }
    );

    useEffect(() => {
        getPlanet(page).then((res) => {
            setPlanetsList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);


    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Planetas
                </Text>


                {loading ?
                    <Text style={styles.cardTitle}>
                        Carregando...
                    </Text>
                    :
                    <>
                        <FlatList
                            data={PlanetsList}
                            showsVerticalScrollIndicator={false}

                            renderItem={({ item, index }) => (

                                <>
                                    <View style={styles.textos}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModal(true)
                                                setPlanetsItem(item)
                                            }}
                                        >
                                            <Text style={styles.cardTitle}>Planeta: {item.name}</Text>
                                            <Text style={styles.text}>Diâmetro: {item.diameter}</Text>

                                        </TouchableOpacity>


                                    </View>



                                </>
                            )

                            }
                        />

                    </>
                }
                  <View style={styles.buttons}>
                    <Botao titulo={'1'} corFundo={'transparent'} corTexto={'white'} onPress={() => setPage("?page=1")}></Botao>
                    <Botao titulo={'2'} corFundo={'transparent'} corTexto={'white'} onPress={() => setPage('?page=2')}></Botao>
                    <Botao titulo={'3'} corFundo={'transparent'} corTexto={'white'} onPress={() => setPage("?page=3")}></Botao>
                    <Botao titulo={'4'} corFundo={'transparent'} corTexto={'white'} onPress={() => setPage('?page=4')}></Botao>
                </View>

            </View>
        </ImageBackground>
    )
}