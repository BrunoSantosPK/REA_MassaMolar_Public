import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

function defAltura() {
    const maxAbs = Math.round(Dimensions.get('window').height);
    const maxRel = 0.55;

    let valor = 380;
    while(valor > maxAbs * maxRel) {
        valor -= 10;
    }

    return valor;
}

export default StyleSheet.create({

    tituloPagina: {
        fontFamily: "HumnstBold",
        color: "#383938",
        fontSize: 22
    },

    contentTabela: {
        height: defAltura(),
        marginTop: 10,
        borderColor: "#383938",
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 10
    },

    tabela: {
        marginBottom: 15,
        marginTop: 10
    },

    periodo: {
        flexDirection: "row",
        marginBottom: 5
    },

    blocoElemento: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: 63,
        height: 60,
        borderColor: "#f8f8f8",
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: "#fafafa",
        marginRight: 5
    },

    block: {
        opacity: 0,
        height: 0,
        borderWidth: 0
    },

    textoNumeroAtomico: {
        fontFamily: "Humnst",
        fontSize: 11
    },

    textoSimbolo: {
        fontFamily: "HumnstBold",
        fontSize: 20
    },

    textoNome: {
        fontFamily: "Humnst",
        fontSize: 11
    },

    organizarDados: {
        justifyContent: "center",
        alignItems: "center"
    },

    textoInterno: {
        fontFamily: "HumnstBold",
        color: "#383938",
        marginTop: 15,
        fontSize: 18
    },

    bodyModal: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },

    contentModal: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    tituloModal: {
        fontFamily: "HumnstBold",
        fontSize: 18,
        marginBottom: 10
    },

    textoModal: {
        fontFamily: "Humnst",
        fontSize: 17
    },

    areaBotaoModal: {
        justifyContent: "center",
        alignItems: "center"
    },

    botaoModal: {
        backgroundColor: "#37c8f3",
        paddingVertical: 5,
        borderRadius: 7,
        marginTop: 15,
        paddingHorizontal: 15
    },

    textoBotaoModal: {
        fontFamily: "HumnstBold",
        color: "#fff",
        fontSize: 18
    }

});