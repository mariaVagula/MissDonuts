import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'

export default function FimPedido({ setConfirma, setRastreio, setFim, navigation }) {
    function GoHome()
    {        
        setConfirma(false);
        setRastreio(false);
        setFim(false);
        navigation.navigate( "Home" );
    }
    return (
        <View style={css.container}>
            <View style={css.caixatitulo}>
                <Text style={css.titulo}>A Miss Donuts agradece sua preferência!</Text>
                <Text style={css.texto}>Deseja continuar navegando no nosso site?</Text>
                <TouchableOpacity onPress={GoHome} style={css.botao}>
                    <Text style={css.textobotao}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>           
        </View>
    )
}
const css = StyleSheet.create({
    container: {
      backgroundColor: "#FFD9E7",
      height: "100%",
      fontSize: 25
    },
    caixatitulo: {
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 250,
    },
    titulo: {
        textAlign: "center",
        fontSize: 19,
        marginTop: 10,
        fontWeight: "bold"
    },
    texto: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 10
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