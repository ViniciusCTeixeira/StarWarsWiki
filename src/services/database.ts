import AsyncStorage from '@react-native-async-storage/async-storage';

import {FilmsProps} from "../models/films";
import {useState} from "react";

export async function addFavoritos(filme: FilmsProps) {
    try {
        const json = await AsyncStorage.getItem('@favoritos')
        const res: FilmsProps[] = json != null ? JSON.parse(json) : null;
        res.push(filme);
        const jsonValue = JSON.stringify(filme)
        await AsyncStorage.setItem('@favoritos', jsonValue)
        return true;
    } catch (e) {
        return false;
    }
}

export async function getFavoritos(){
    try {
        const jsonValue = await AsyncStorage.getItem('@favoritos')
        const res: FilmsProps[] = jsonValue != null ? JSON.parse(jsonValue) : null;
        return res;
    } catch (e) {
        // error reading value
    }
}