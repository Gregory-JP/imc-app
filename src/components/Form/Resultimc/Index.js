import React from 'react';
import { View, Text} from 'react-native';

export default function IMC(props) {
    return (
        <View>
        <Text>{props.resultImc}</Text>
        <Text>{props.messageResultImc}</Text>
        </View>
    );
}