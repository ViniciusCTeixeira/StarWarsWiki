import React from 'react';
import {ImageBackground, ScrollView, View} from "react-native";

import Styles from "../../assets/styles";
import BackgroundHome from "../../assets/images/backgroud_home.jpg";

export function Community() {
    return (
        <View style={Styles.container}>
            <ImageBackground source={BackgroundHome} resizeMode="cover" style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 10, marginVertical: 10}}>

                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}