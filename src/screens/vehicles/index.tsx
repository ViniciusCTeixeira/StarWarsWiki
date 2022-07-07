import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { Botao } from '../../components/Botao';
import { getVehicles } from '../../services/swapi';
import {styles} from '../vehicles/styles'
    
    import BackgroundHome from "../../assets/images/backgroud_home.jpg"


export interface vehicles {
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
    vehicle_class: string,
    pilots: [],
    films: [],
    created: string,
    edited: string,
    url: string
}

export const Vehicles = () => {

    const [vehiclesList, setVehiclesList] = useState<vehicles[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [vehiclesItem, setVehiclesItem] = useState<vehicles>(
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
            vehicle_class: "",
            pilots: [],
            films: [],
            created: "",
            edited: "",
            url: ""
        }
    );

    useEffect(() => {
        setLoading(true);
        getVehicles(page).then((res) => {
            setVehiclesList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);
    
    
    return (
        <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.title}>
                Veículos
            </Text>


            {loading ?
                <Text style={styles.cardTitle}>
                    Carregando...
                </Text>
                :
                <>
                    <FlatList
                        data={vehiclesList}
                        showsVerticalScrollIndicator={false}

                        renderItem={({ item, index }) => (

                            <>
                                <View style={styles.textos}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(true)
                                            setVehiclesItem(item)
                                        }}
                                    >
                                        <Text style={styles.cardTitle}>Veículo: {item.name}</Text>
                                        <Text style={styles.text}>Modelo: {item.model}</Text>

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