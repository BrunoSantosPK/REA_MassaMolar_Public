import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

//const bordaHeader = 150;
const alturaBarra = Constants.statusBarHeight;
const bordaHeader = (Math.round(Dimensions.get('window').width) / 2) - alturaBarra;
const larguraIcone = 130

export default StyleSheet.create({

    content: {
        backgroundColor: "#fafafa"
    },

    areaHeader: {
        backgroundColor: "#2759b7",
        paddingTop: alturaBarra + 10,
        paddingHorizontal: 20,
        paddingBottom: 30,
        borderBottomLeftRadius: bordaHeader,
        borderBottomRightRadius: bordaHeader,
        justifyContent: "center",
        alignItems: "center"
    },

    textoAbertura: {
        fontFamily: "ArEssence",
        color: "#fff",
        fontSize: 48
    },

    textoSubAbertura: {
        fontFamily: "HumnstBold",
        color: "#fff",
        fontSize: 20,
        marginTop: 10,
        textAlign: "center"
    },

    page: {
        marginTop: 20,
        paddingHorizontal: 20
    },

    linhaMenu: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15
    },

    botaoMenu: {
        backgroundColor: "#fff",
        padding: 5,
        width: larguraIcone,
        height: larguraIcone,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#f8f8f8",
        borderWidth: 5
    },

    textoIcone: {
        color: "#383938",
        fontFamily: "HumnstBold",
        fontSize: 18,
        textAlign: "center"
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