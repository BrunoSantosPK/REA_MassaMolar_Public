// Imports do sistema
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Modal } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

// Estilização
import style from "./style";
import globals from "../../styles/globals";

// Funções personalizadas
import gerarAlerta from "../../utils/gerarAlerta";
import { massa, distribuicao } from "../../utils/format";

// Componentes personalizados
import FinalMargin from "../FinalMargin";
import SimpleHeader from "../SimpleHeader";
import AdMob from "../AdMob";

// Service: API PK Chemistry
import api from "../../services/chAPI";

export default function TabelaPeriodica() {
    // Gerencia o loading e variáveis de elementos
    const [loading, setLoading] = useState(false);
    const [elementos, setElementos] = useState([]);
    const [visivel, setVisivel] = useState(false);

    // Gerencia a navegação
    const nav = useNavigation();
    function back() {
        nav.goBack();
    }

    // Gerencia as constantes para render
    const [carregado, setCarregado] = useState(false);
    const grid = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
        [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
        [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
        [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
    ];
    const extra = [
        [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
        [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
    ];

    // Função de inicialização
    async function init() {
        setLoading(true);

        try {
            const res = await api.get("/comando.php?acao=elementos&query=all");

            setElementos(res.data.resultado);
            setCarregado(true);

            setLoading(false);
        } catch(erro) {
            setLoading(false);
            gerarAlerta("Erro", "Falha na conexão, verifique o acesso a internet.");
        }
    }

    // Função para abertura do modal
    const [indc, setIndc] = useState(0);
    function detalhes(numero) {
        setIndc(numero - 1);
        setVisivel(true);
    }

    useEffect(() => {
        init();
    }, []);

    function renderTabela() {
        return (
            <View style={style.tabela}>

                {grid.map(linha => (
                    <View style={style.periodo}>
                        {linha.map(atomo => (
                            <TouchableOpacity style={(atomo != 0) ? style.blocoElemento : [style.blocoElemento, style.block]} onPress={() => detalhes(atomo)}>
                                {atomo != 0 && (
                                    <View style={style.organizarDados}>
                                        <Text style={style.textoNumeroAtomico}>
                                            {atomo}
                                        </Text>
                                        <Text style={style.textoSimbolo}>
                                            {elementos[atomo - 1].simbolo}
                                        </Text>
                                        <Text style={style.textoNome}>
                                            {elementos[atomo - 1].nome}
                                        </Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}

                <Text style={style.textoInterno}>Lantanídeos</Text>
                <View style={style.periodo}>
                    {extra[0].map(atomo => (
                        <TouchableOpacity style={style.blocoElemento} onPress={() => detalhes(atomo)}>
                            <View style={style.organizarDados}>
                                <Text style={style.textoNumeroAtomico}>
                                    {atomo}
                                </Text>
                                <Text style={style.textoSimbolo}>
                                    {elementos[atomo - 1].simbolo}
                                </Text>
                                <Text style={style.textoNome}>
                                    {elementos[atomo - 1].nome}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={style.textoInterno}>Actinídios</Text>
                <View style={style.periodo}>
                    {extra[1].map(atomo => (
                        <TouchableOpacity style={style.blocoElemento} onPress={() => detalhes(atomo)}>
                            <View style={style.organizarDados}>
                                <Text style={style.textoNumeroAtomico}>
                                    {atomo}
                                </Text>
                                <Text style={style.textoSimbolo}>
                                    {elementos[atomo - 1].simbolo}
                                </Text>
                                <Text style={style.textoNome}>
                                    {elementos[atomo - 1].nome}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        );
    }

    return (
        <SafeAreaView style={globals.body}>
            <SimpleHeader titulo="Tabela Periódica" callback={back} />

            <ScrollView style={globals.content}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={globals.spinnerTextStyle} />

                <Text style={style.tituloPagina}>Tabela Periódica Interativa</Text>

                <View style={style.contentTabela}>
                    <ScrollView
                        showsVerticalScrollIndicator={true} >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}
                            scrollEventThrottle={200}
                            decelerationRate="fast" >

                            {carregado && renderTabela()}

                        </ScrollView>
                    </ScrollView>
                </View>

                <Modal animationType="slide" transparent={true} visible={visivel}>

                    <View style={style.bodyModal}>
                        <View style={style.contentModal}>

                            {carregado && (
                                <View>
                                    <Text style={style.tituloModal}>
                                        {elementos[indc].nome}
                                    </Text>
                                    <Text style={style.textoModal}>
                                        Símbolo: {elementos[indc].simbolo}
                                    </Text>
                                    <Text style={style.textoModal}>
                                        Número atômico: {indc + 1}
                                    </Text>
                                    <Text style={style.textoModal}>
                                        Total de elétrons: {indc + 1}
                                    </Text>
                                    <Text style={style.textoModal}>
                                        Massa molar: {massa(elementos[indc].mm)}
                                    </Text>
                                    <Text style={style.textoModal}>
                                        Distribuição eletrônica: {distribuicao(indc + 1)}
                                    </Text>
                                </View>
                            )}

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