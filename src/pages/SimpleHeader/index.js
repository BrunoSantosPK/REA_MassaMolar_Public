import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import style from "./style";

export default function SimpleHeader({ titulo, callback }) {
    return (
        <View style={style.header}>
            <View style={style.areaTitulo}>
                <TouchableOpacity style={style.circulo} onPress={callback}>
                    <Ionicons name="md-arrow-round-back" size={24} color="#fff" />
                </TouchableOpacity>

                <Text style={style.textoTitulo}>{titulo}</Text>
                <View style={style.linhaTitulo} />
            </View>
        </View>
    );
}