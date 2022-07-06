import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    titulo : string, 
    corFundo: string,
    corTexto:string 
};

export function Botao({ titulo, corFundo, corTexto, ...rest } : ButtonProps) {

    return(
    <TouchableOpacity
        style={[styles.button,{backgroundColor:corFundo}]}
        activeOpacity={0.7} 
        {...rest}
    >
        <Text style={[styles.buttonText,{color:corTexto}]}>
            {titulo}
        </Text>
    </TouchableOpacity>
    )
}