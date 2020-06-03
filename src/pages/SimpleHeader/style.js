import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const raio = 15;

export default StyleSheet.create({

    header: {
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: "#2759b7",
        paddingBottom: 30,
        borderBottomRightRadius: 30
    },

    areaTitulo: {
        alignItems: "center",
        justifyContent: "center"
    },

    textoTitulo: {
        color: "#fff",
        fontFamily: "HumnstBold",
        fontSize: 22,

    },

    linhaTitulo: {
        borderColor: "#37c8f3",
        borderWidth: 2,
        borderBottomRightRadius: 5,
        width: "85%",
        position: "absolute",
        left: 0,
        top: 40
    },

    circulo: {
        width: 2 * raio,
        height: 2 * raio,
        borderRadius: raio,
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "absolute",
        left: 10,
        top: 0,
        justifyContent: "center",
        alignItems: "center"
    }

});