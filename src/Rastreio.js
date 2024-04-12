import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function Rastreio({ setConfirma, setRastreio, setFim }) {
    return (
        <View style={css.container}>
            <View style={css.caixatitulo}>
                <Text style={css.titulo}>Acompanhe seu pedido em tempo real:</Text>
            </View>
            <View style={css.caixaimagem}>
                <Image style={css.imagem} source={require('../assets/local2.jpg')} />
            </View>
            <View>
                <TouchableOpacity onPress={Rastreio} style={css.botao}>
                    <Text style={css.textobotao}>Pedido entregue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
   
    function Rastreio() {
        setConfirma(false);
        setRastreio(false);
        setFim(true);
    }
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#FFD9E7",
        height: "100%"
    },
    caixatitulo: {
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 130,
    },
    titulo: {
        textAlign: "center",
        fontSize: 17,
        marginTop: 10,
        fontWeight: "bold"
    },
    caixaimagem: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
        marginTop: 10
    },
    imagem: {
        width: 300,
        height: 300
    },
    botao: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: 200,
        height: 50,
        backgroundColor: "#EEAACC",
        borderRadius: 5,
        marginTop: 10
    },
    textobotao: {
        fontSize: 16,
        fontWeight: "500"
    }
})