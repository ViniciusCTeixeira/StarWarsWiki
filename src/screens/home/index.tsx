import React from 'react';
import {View} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

import Styles from "../../assets/styles";

import {Button} from "@rneui/themed";

import {propsNavigationStack} from "../../Routes";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<propsNavigationStack, 'Home'>;

export function Home(props: HomeProps) {
    return (
        <SafeAreaView style={Styles.container} edges={['top', 'left', 'right']}>
            <Button
                title={'Comunidade'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    props.navigation.navigate("Community")
                }}
            />
        </SafeAreaView>
    )
}