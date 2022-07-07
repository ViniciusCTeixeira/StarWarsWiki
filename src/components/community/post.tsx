import React from 'react';
import {Text, Button} from '@rneui/themed';
import {View, Image} from "react-native";

import Styles from "../../assets/styles";

import {PostProps} from "../../models/community";


export function PostCard(post: PostProps) {
    return (
        <View style={[Styles.column, {
            width: "100%",
            borderRadius: 10,
            backgroundColor: "rgba(169,169,169,0.65)",
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 5
        }]}>
            <View style={Styles.text_center}>
                <Text h3>Você</Text>
            </View>
            <Text h2>{post.title}</Text>
            <View style={Styles.divider}/>
            <Text h4>{post.body}</Text>
        </View>
    )
}