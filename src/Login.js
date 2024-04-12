import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View, Keyboard, StyleSheet, Image } from 'react-native'

export default function Login({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login() {
        Keyboard.dismiss();
        if (email == "malo" && senha == "123") {
            setLogado(true);
        }
    }

    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/LoginFoto.jpg")} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.input} onChangeText={(digitado) => setEmail(digitado)} value={email} />
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={(digitado) => setSenha(digitado)} value={senha} />
            </View>
            <TouchableOpacity onPress={Cadastrar} >
                <Text style={styles.textbutton}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Login} style={styles.button}>
                <Text style={styles.textbutton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F2F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    conteudo: {
        width: '80%',
        alignItems: 'right',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#ECE4E4',
        width: '100%',
        height: 50,
        padding: 10,
        borderRadius: 5,
        marginTop: 5
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#5b3623',
        marginRight: 260,
        marginTop: 10
    },
    button: {
        width: '35%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#E397CC',
        marginTop: 25
    },
    textbutton: {
        color: '#5b3623',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 45
    },
    imagem: {
        width: 350,
        resizeMode: "contain"
    }
});