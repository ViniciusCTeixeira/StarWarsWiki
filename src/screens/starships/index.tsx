import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { Botao } from '../../components/Botao';
import { StarshipModal } from '../../components/modais/ModalNaves';
import { getStarships} from '../../services/swapi';
import { styles } from './styles';
import BackgroundHome from "../../assets/images/backgroud_home.jpg"


export interface starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [],
    films: [],
    created: string,
    edited: string,
    url: string
}

export const Starship = () => {

    const [starShipList, setStarShipList] = useState<starship[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [starshipItem, setStarshipItem] = useState<starship>(
        {
            name: "",
            model: "",
            manufacturer: "",
            cost_in_credits: "",
            length: "",
            max_atmosphering_speed: "",
            crew: "",
            passengers: "",
            cargo_capacity: "",
            consumables: "",
            hyperdrive_rating: "",
            MGLT: "",
            starship_class: "",
            pilots: [],
            films: [],
            created: "",
            edited: "",
            url: ""
        }
    );

    useEffect(() => {
        setLoading(true);
        getStarships(page).then((res) => {
            setStarShipList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);
    
    
    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.title}>
                Naves
            </Text>


            {loading ?
                <Text style={styles.cardTitle}>
                    Carregando...
                </Text>
                :
                <>
                    <FlatList
                        data={starShipList}
                        showsVerticalScrollIndicator={false}

                        renderItem={({ item, index }) => (

                            <>
                                <View style={styles.textos}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(true)
                                            setStarshipItem(item)
                                        }}
                                    >
                                        <Text style={styles.cardTitle}>Nave: {item.name}</Text>
                                        <Text style={styles.text}>Modelo: {item.model}</Text>

                                    </TouchableOpacity>


                                </View>



                            </>
                        )

                        }
                    />
                    <StarshipModal item={starshipItem} modal={modal} setModal={setModal} />

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