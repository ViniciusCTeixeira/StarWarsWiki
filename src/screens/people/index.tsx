import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { Botao } from '../../components/Botao';
import { getPeople } from '../../services/swapi';
import { styles } from './styles';
import BackgroundHome from "../../assets/images/backgroud_home.jpg"


export interface people {
    name: string,
    birth_year: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    height: string,
    mass: string,
    skin_color: string,
    homeworld: string,
    films: [],
    species: [],
    starships:[],
    vehicles:[],
    url: string,
    created: string,
    edited: string,
}

export const People = () => {

    const [peopleList, setPeopleList] = useState<people[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [peopleItem, setPeopleItem] = useState<people>(
        {
            name: "",
            birth_year:" ",
            eye_color: "string",
            gender: "",
            hair_color: "",
            height: "",
            mass: "",
            skin_color: "",
            homeworld: "",
            films: [],
            species: [],
            starships:[],
            vehicles:[],
            url: "",
            created: "",
            edited: "",
        }
    );

    useEffect(() => {
        setLoading(true);
        getPeople(page).then((res) => {
            setPeopleList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);


    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Personagens
                </Text>


                {loading ?
                    <Text style={styles.cardTitle}>
                        Carregando...
                    </Text>
                    :
                    <>
                        <FlatList
                            data={peopleList}
                            showsVerticalScrollIndicator={false}

                            renderItem={({ item, index }) => (

                                <>
                                    <View style={styles.textos}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModal(true)
                                                setPeopleItem(item)
                                            }}
                                        >
                                            <Text style={styles.cardTitle}>Personagem: {item.name}</Text>
                                            <Text style={styles.text}>Data de nascimento: {item.birth_year}</Text>

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