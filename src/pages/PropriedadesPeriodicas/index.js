// Imports do sistema
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";

// Import de ícones e imagens
import imgRaio from "../../assets/raio-atomico.png";
import imgEle from "../../assets/eletronegatividade.png";
import imgCalma from "../../assets/calma.png";
import imgTab from "../../assets/tabela-destaque-grupos.png";

// Componentes personalizados
import FinalMargin from "../FinalMargin";
import SimpleHeader from "../SimpleHeader";
import AdMob from "../AdMob";

// Estilização
import style from "./style";
import globals from "../../styles/globals";

export default function PropriedadesPeriodicas() {
    // Gerencia a navegação
    const nav = useNavigation();
    function back() {
        nav.goBack();
    }

    function navTabela() {
        nav.navigate("TabelaPeriodica");
    }

    // Gerencia as linhas das tabelas
    const grupo1 = [
        { z: 3, s: "Li" }, { z: 11, s: "Na" }, { z: 19, s: "K" }, { z: 37, s: "Rb" }, { z: 55, s: "Cs" }, { z: 87, s: "Fr" }
    ];

    const grupo2 = [
        { z: 4, s: "Be" }, { z: 12, s: "Mg" }, { z: 20, s: "Ca" }, { z: 38, s: "Sr" }, { z: 56, s: "Ba" }, { z: 88, s: "Ra" }
    ];

    const grupo18 = [
        { z: 2, s: "He" }, { z: 10, s: "Ne" }, { z: 18, s: "Ar" }, { z: 36, s: "Kr" }, { z: 54, s: "Xe" }, { z: 86, s: "Rn" }, { z: 118, s: "Og" }
    ];

    const grupo17 = [
        { z: 9, s: "F" }, { z: 17, s: "Cl" }, { z: 35, s: "Br" }, { z: 53, s: "I" }, { z: 85, s: "At" }, { z: 117, s: "Ts" }
    ];

    const grupo16 = [
        { z: 8, s: "O" }, { z: 16, s: "S" }, { z: 34, s: "Se" }, { z: 52, s: "Te" }, { z: 84, s: "Po" }, { z: 116, s: "Lv" }
    ];

    return (
        <SafeAreaView style={globals.body}>
            <SimpleHeader titulo="Propriedades Periódicas" callback={back} />

            <ScrollView style={globals.content}>

                <Text style={style.textoTitulo}>Setas de Periodicidade</Text>

                <Text style={style.textoComum}>A diversidade de elementos é grande, mas você sabia que é possível juntar elementos em grupos que compartilham propriedades? Bom, é para isso que existe a tabela periódica. Com o auxílio dela, nós podemos encontrar as chamadas propriedades periódicas dos elementos.</Text>

                <Text style={style.textoComum}>A primeira propriedade é o raio atômico. O nome já deixa uma pista, o raio é uma forma de medir o tamanho do elemento. Na tabela, o raio atômico aumenta da direita pra esquerda e de cima pra baixo.</Text>

                <View style={style.contentImg}>
                    <Image source={imgRaio} style={style.imgSetas} />
                </View>

                <Text style={style.textoComum}>Assim, podemos identificar que o elemento de maior raio atômico é o Frâncio. Utilizando a mesma lógica, o Hélio é o elemento com menor raio atômico.</Text>

                <Text style={style.textoComum}>A próxima propriedade é a eletronegatividade, que vamos definir como a tendência do elemento de ganhar um elétron, ou seja, de puxar um elétron para a sua nuvem eletrônica.</Text>

                <Text style={style.textoComum}>A eletronegatividade possui uma ligação com o raio atômico. Quanto maior o tamanho do átomo, mais distante do núcleo os elétrons estão. Assim, quanto menor o raio, mais próximos do núcleo e maior a força de atração (núcleo positivo e elétron negativo).</Text>

                <Text style={style.textoComum}>Sabendo disso, consegue propor como será a periodicidade da eletronegatividade? A eletronegatividade cresce da esquerda para a direita e de baixo para cima.</Text>

                <View style={style.contentImg}>
                    <Image source={imgEle} style={style.imgSetas} />
                </View>

                <Text style={style.textoComum}>Vamos voltar em alguns exemplos anteriores. Temos que o Frâncio é o elemento de maior raio e por isso é o com menor eletronegatividade. Por outro lado, o Flúor é o elemento mais eletronegativo. Não, você não leu errado, o Hélio, apesar de ter o menor raio, não é o mais eletronegativo. Vamos falar sobre esse caso do Hélio daqui a pouco.</Text>

                <View style={style.contentImg}>
                    <Image source={imgCalma} style={style.imgCalma} />
                </View>

                <Text style={style.textoTitulo}>Vamos falar de colunas</Text>

                <Text style={style.textoComum}>Na tabela periódica nós temos cinco colunas muito importantes. Elas são as duas primeiras e as três últimas.</Text>

                <View style={style.contentImg}>
                    <Image source={imgTab} style={style.imgTab} />
                </View>

                <Text style={style.textoComum}>A primeira coluna, chamada de grupo 1, é a dos metais alcalinos. Os elementos dessa coluna tendem a perder um elétron. Os elementos desse grupos estão logo abaixo.</Text>

                <View style={style.contentImg}>
                    <ScrollView horizontal={true} style={style.separadorGrupo}>
                        {grupo1.map((item, indc) => (
                            <View style={style.caixaElemento} key={`grupo1${indc}`}>
                                <Text style={style.textoZ}>{item.z}</Text>
                                <Text style={style.textoSimbolo}>{item.s}</Text>
                            </View>
                        ))}
  
                    </ScrollView>
                </View>

                <Text style={style.textoComum}>A segunda coluna, a dos metais alcalinos terrosos, é chamada de grupo 2. Esses elementos tendem a perder dois elétrons. Olhe logo abaixo os elementos do grupo 2.</Text>

                <View style={style.contentImg}>
                    <ScrollView horizontal={true} style={style.separadorGrupo}>
                        {grupo2.map((item, indc) => (
                            <View style={style.caixaElemento} key={`grupo2${indc}`}>
                                <Text style={style.textoZ}>{item.z}</Text>
                                <Text style={style.textoSimbolo}>{item.s}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text style={style.textoComum}>Agora, vamos para o outro lado. A última coluna é o grupo 18, os famosos gases nobres. Lembra que quando falamos de eletronegatividade nós excluímos o Hélio? Isso porque o grupo dos gases nobres são inertes, ou seja, eles tendem a não terem alterações nas suas estruturas, sem ganhar ou perder elétrons. Em outras palavras, eles são estáveis.</Text>

                <View style={style.contentImg}>
                    <ScrollView horizontal={true} style={style.separadorGrupo}>
                        {grupo18.map((item, indc) => (
                            <View style={style.caixaElemento} key={`grupo18${indc}`}>
                                <Text style={style.textoZ}>{item.z}</Text>
                                <Text style={style.textoSimbolo}>{item.s}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text style={style.textoComum}>Andando para a esquerda, a penúltima coluna, o grupo 17, são os chamados halogênios. Os elementos aqui tendem a perdem 1 elétron com facilidade. Dê uma olhada nos elementos do grupo 17 logo abaixo.</Text>

                <View style={style.contentImg}>
                    <ScrollView horizontal={true} style={style.separadorGrupo}>
                        {grupo17.map((item, indc) => (
                            <View style={style.caixaElemento} key={`grupo17${indc}`}>
                                <Text style={style.textoZ}>{item.z}</Text>
                                <Text style={style.textoSimbolo}>{item.s}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text style={style.textoComum}>Um pouco mais para a esquerda, encontramos o grupo 16, os calcogênios. Esses elementos possuem a tendência de perderem 2 elétrons. Passe o olho na lista aqui embaixo e pra se familiarizar.</Text>

                <View style={style.contentImg}>
                    <ScrollView horizontal={true} style={style.separadorGrupo}>
                        {grupo16.map((item, indc) => (
                            <View style={style.caixaElemento} key={`grupo16${indc}`}>
                                <Text style={style.textoZ}>{item.z}</Text>
                                <Text style={style.textoSimbolo}>{item.s}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text style={style.textoComum}>Bom, acredito é o suficiente por enquanto. Te convido a dar uma olhada na tabela periódica interativa, só clicar <Text style={style.hyperlink} onPress={navTabela}>aqui</Text>. Aproveite para explorar um pouco mais sobre os elementos. Até a próxima.</Text>

                <FinalMargin />
            </ScrollView>

            <AdMob tipo="producao" />
        </SafeAreaView>
    );
}