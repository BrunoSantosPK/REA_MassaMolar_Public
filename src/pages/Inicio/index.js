// Imports do sistema
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Modal } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

// Import de ícones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Componentes personalizados
import FinalMargin from "../FinalMargin";
import AdMob from "../AdMob";

// Estilização
import style from "./style";
import globals from "../../styles/globals";

// Funções personalizadas
import gerarAlerta from "../../utils/gerarAlerta";

// Service: API PK Chemistry
import api from "../../services/chAPI";

export default function Inicio() {
    // Gerencia a navegação
    const nav = useNavigation();

    function navCalc() {
        nav.navigate("MassaMolar");
    }

    function navTabela() {
        nav.navigate("TabelaPeriodica");
    }

    function navPropPer() {
        nav.navigate("PropriedadesPeriodicas");
    }

    // Gerencia o modal de novidades
    const [loading, setLoading] = useState(false);
    const [visivel, setVisivel] = useState(false);
    const [novidades, setNovidades] = useState("");
    async function navNovidades() {
        setLoading(true);

        try {
            const res = await api.get("/comando.php?acao=novidades");

            setNovidades(res.data.novidades);
            setVisivel(true);
            setLoading(false);
        } catch(erro) {
            setLoading(false);
            gerarAlerta("Erro", "Falha na conexão, verifique seu acesso a internet.")
        }
    }

    return (
        <SafeAreaView style={globals.body}>

            <ScrollView style={style.content}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={globals.spinnerTextStyle} />

                <View style={style.areaHeader}>
                    <Text style={style.textoAbertura}>Massa Molar</Text>
                    <Text style={style.textoSubAbertura}>Recurso Educacional Aberto{"\n"}PK Chemistry</Text>
                </View>

                <View style={style.page}>

                    <View style={style.linhaMenu}>
                        <TouchableOpacity style={style.botaoMenu} onPress={navTabela}>
                            <MaterialCommunityIcons name="periodic-table" size={60} color={style.textoIcone.color} />
                            <Text style={style.textoIcone}>Tabela Periódica</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.botaoMenu} onPress={navPropPer}>
                            <MaterialCommunityIcons name="table-merge-cells" size={50} color={style.textoIcone.color} />
                            <Text style={style.textoIcone}>Propriedades Periódicas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.linhaMenu}>
                        <TouchableOpacity style={style.botaoMenu} onPress={navCalc}>
                            <FontAwesome5 name="weight-hanging" size={40} color={style.textoIcone.color} />
                            <Text style={style.textoIcone}>Calcular Massa Molar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.botaoMenu} onPress={navNovidades}>
                            <Entypo name="new" size={45} color={style.textoIcone.color} />
                            <Text style={style.textoIcone}>Verificar Novidades</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Modal animationType="slide" transparent={true} visible={visivel}>
                    <View style={style.bodyModal}>
                        <View style={style.contentModal}>

                            <Text style={style.tituloModal}>Novidades</Text>
                            <Text style={style.textoModal}>{novidades}</Text>

                            <View style={style.areaBotaoModal}>
                                <TouchableOpacity style={style.botaoModal} onPress={() => setVisivel(false)}>
                                    <Text style={style.textoBotaoModal}>Voltar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        
                    </View>
                </Modal>

                <FinalMargin />
            </ScrollView>

            <AdMob tipo="producao" />

        </SafeAreaView>
    );
}