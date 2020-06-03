// Imports do sistema
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

// Estilização
import style from "./style";
import globals from "../../styles/globals";

// Funções personalizadas
import gerarAlerta from "../../utils/gerarAlerta";
import { porcentagem, massa } from "../../utils/format";

// Componentes personalizados
import FinalMargin from "../FinalMargin";
import SimpleHeader from "../SimpleHeader";
import AdMob from "../AdMob";

// Service: API PK Chemistry
import api from "../../services/chAPI";

export default function MassaMolar() {
    // Gerencia o loading
    const [loading, setLoading] = useState(false);

    // Gerencia a navegação
    const nav = useNavigation();
    function back() {
        nav.goBack();
    }

    // Gerencia a fórmula química e as respostas
    const [formula, setFormula] = useState("");
    const [valida, setValida] = useState("");
    const [consulta, setConsulta] = useState(false);
    const [mm, setMM] = useState(0);
    const [detalhes, setDetalhes] = useState([]);

    // Gerencia o cálculo
    async function calcular() {
        setLoading(true);

        try {
            const res = await api.get(`/comando.php?acao=mm&formula=${formula}`);

            if(res.data.sucesso) {
                setConsulta(true);
                setValida(formula);
                setMM(res.data.massaMolar);
                setDetalhes(res.data.detalhes);
            } else {
                setConsulta(false);
                gerarAlerta("Erro", res.data.erro);
            }

            setLoading(false);
        } catch(erro) {
            setLoading(false);
            setConsulta(false);
            gerarAlerta("Erro", "Falha na conexão, verifique a sua internet.")
        }
    }

    return (
        <KeyboardAvoidingView
            style={globals.body}
            behavior={Platform.Os == "ios" ? "padding" : "height"}>

            <SimpleHeader titulo="Calcular Massa Molar" callback={back} />

            <ScrollView style={globals.content}>

                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={globals.spinnerTextStyle} />

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={style.areaFormulario}>
                            <Text style={style.textoLabel}>Informe a fórmula química (Ex. NaCl, H2SO4, Fe2O2, etc)</Text>

                            <TextInput
                                style={style.input}
                                onChangeText={text =>setFormula(text)}
                                value={formula} />

                            <View style={style.areaBotao}>
                                <TouchableOpacity style={style.botao} onPress={calcular}>
                                    <Text style={style.textoBotao}>Calcular</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </TouchableWithoutFeedback>

                    {consulta && (
                        <View style={style.areaResposta}>
                            <Text style={style.tituloResposta}>Composto informado: "{valida}"</Text>
                            <Text style={style.textoLabel}>Massa molar: {massa(mm)}</Text>

                            <Text style={style.tituloResposta}>Composição (em massa)</Text>
                            <View style={style.linhaComposicao}>
                                <View style={style.celulaComposicao}>
                                    <Text style={style.tituloCelula}>
                                        Elemento
                                    </Text>
                                </View>
                                <View style={style.celulaComposicao}>
                                    <Text style={style.tituloCelula}>
                                        Porcentagem
                                    </Text>
                                </View>
                            </View>
                            {detalhes.map((item, indc) => (
                                <View style={style.linhaComposicao} key={indc}>
                                    <View style={style.celulaComposicao}>
                                        <Text style={style.textoLabel}>
                                            {item.nome} ({item.simbolo})
                                        </Text>
                                    </View>
                                    <View style={style.celulaComposicao}>
                                        <Text style={style.textoLabel}>
                                            {porcentagem(item.porcentagem)}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}

                <FinalMargin />
            </ScrollView>

            <AdMob tipo="producao" />
            
        </KeyboardAvoidingView>
    );
}