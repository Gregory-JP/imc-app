import React from "react";
import { View, Text, TextInput, Button} from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput keyboardType="numeric" placeholder="Ex. 1.70" />
                <Text>Peso</Text>
                <TextInput keyboardType="numeric" placeholder="Ex. 75.0" />

                <Button title="Calcular" />
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
