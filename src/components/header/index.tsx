import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header as HeaderRNE, Icon} from '@rneui/themed';

import {HeaderStyle} from "./style";

type HeaderComponentProps = {
    title: string;
    home?: boolean;
};

export const Header = (props: HeaderComponentProps) => {
    return (
        <HeaderRNE
            leftComponent={
                <TouchableOpacity onPress={() => {}}>
                    <Icon type="material" name="home" color="white" size={30}/>
                </TouchableOpacity>
            }
            rightComponent={
                <TouchableOpacity onPress={() => {}}>
                    <Icon type="material" name="groups" color="white" size={30}/>
                </TouchableOpacity>
            }
            centerComponent={{text: props.title, style: HeaderStyle.heading}}
        />
    );
};