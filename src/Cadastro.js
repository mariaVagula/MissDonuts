import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View, StyleSheet, Image, Keyboard } from 'react-native'

export default function Cadastro({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Cadastrar() {
        Keyboard.dismiss();
        setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/CadastroFoto.jpg")} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.label}>Nome completo:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Telefone:</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.input} onChangeText={(digitado) => setEmail(digitado)} value={email} />
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={(digitado) => setSenha(digitado)} value={senha} />
            </View>
            <TouchableOpacity onPress={Voltar}>
                <Text style={styles.textbutton}>Voltar para o Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Cadastrar} style={styles.button}>
                <Text style={styles.textbutton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F2F3',
        alignItems: 'center',
        justifyContent: 'center',
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