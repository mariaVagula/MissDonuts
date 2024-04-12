import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function Confirma({ setConfirma, setRastreio, setFim }) {
    function Rastreio() {
        setConfirma(false);
        setFim(false);
        setRastreio(true);
    }

    return (
        <View style={css.container}>
            <View style={css.caixatitulo}>
                <Text style={css.titulo}>Seu pedido foi confirmado e está em preparo.</Text>
                <Text style={css.texto}>Horário previsto para entrega: 16:25hrs.</Text>
            </View>
            <View style={css.caixaimagem}>
                <Image style={css.imagem} source={require('../assets/LogoOriginal.png')} />
            </View>
            <TouchableOpacity onPress={Rastreio} style={css.botao}>
                <Text style={css.textobotao}>Acompanhar o Pedido</Text>
            </TouchableOpacity>
        </View>
    )
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
    texto: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 10
    },
    caixaimagem: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        height: 300
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
        borderRadius: 5
    },
    textobotao: {
        fontSize: 16,
        fontWeight: "500"
    }
})