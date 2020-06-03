import { StyleSheet } from "react-native";

export default StyleSheet.create({

    areaFormulario: {
        marginTop: 15
    },

    textoLabel: {
        fontFamily: "Humnst",
        fontSize: 18,
        color: "#383938",
    },

    input: {
        borderColor: "#383938",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 5,
        fontFamily: "Humnst",
        color: "#383938",
        fontSize: 18,
        paddingVertical: 3
    },

    areaBotao: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    botao: {
        backgroundColor: "#37c8f3",
        marginTop: 15,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20
    },

    textoBotao: {
        color: "#fff",
        fontFamily: "HumnstBold",
        fontSize: 20
    },

    areaResposta: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: "#fafafa"
    },

    tituloResposta: {
        fontFamily: "HumnstBold",
        fontSize: 18,
        color: "#383938",
        marginBottom: 7,
        marginTop: 15
    },

    linhaComposicao: {
        flexDirection: "row",
        borderColor: "#fafafa",
        borderWidth: 1,
        marginBottom: 5
    },

    celulaComposicao: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "center"       
    },

    tituloCelula: {
        fontFamily: "HumnstBold",
        fontSize: 19,
        color: "#383938"
    }

});