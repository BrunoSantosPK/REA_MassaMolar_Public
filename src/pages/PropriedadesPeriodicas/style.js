import { StyleSheet } from "react-native";

const larguraSeta = 250;
const larguraCalma = 200;
const larguraTabela = 250;

const caixaElemento = 60;

export default StyleSheet.create({

    textoTitulo: {
        fontFamily: "HumnstBold",
        color: "#383938",
        fontSize: 19,
        marginVertical: 15
    },

    textoComum: {
        fontFamily: "Humnst",
        color: "#383938",
        fontSize: 17,
        marginBottom: 10
    },

    hyperlink: {
        textDecorationLine: "underline"
    },

    contentImg: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },

    imgSetas: {
        width: larguraSeta,
        height: dimSetas(larguraSeta)
    },

    imgCalma: {
        width: larguraCalma,
        height: dimCalma(larguraCalma)
    },

    imgTab: {
        width: larguraTabela,
        height: dimTab(larguraTabela)
    },

    separadorGrupo: {
        borderColor: "#fafafa",
        paddingBottom: 10,
        borderBottomWidth: 2
    },

    caixaElemento: {
        borderColor: "#383938",
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        width: caixaElemento,
        height: caixaElemento,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },

    textoZ: {
        fontFamily: "Humnst",
        color: "#383938",
        fontSize: 15,
    },

    textoSimbolo: {
        fontFamily: "HumnstBold",
        color: "#383938",
        fontSize: 19,
    }

});

function dimSetas(base) {
    return (552 / 1000) * base;
}

function dimCalma(base) {
    return (660 / 800) * base;
}

function dimTab(base) {
    return (590 / 1000) * base;
}