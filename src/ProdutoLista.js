import { Image, Pressable, StyleSheet, Text, Touchable, View } from "react-native";

export default function ProdutoLista({ nome, descricao, preco, imagem, setDetalhe, setNome, setDescricao, setImagem, setPreco }) {

    function ExibeDetalhes()
    {
        setNome( nome );
        setDescricao( descricao );
        setPreco( preco );
        setImagem( imagem);
        setDetalhe( true );
    }
    return (
        <Pressable onPress={ExibeDetalhes}>
            <View style={css.container}>
                <View style={css.caixatexto}>
                    <Text style={css.nome}>{nome}</Text>
                    <Text style={css.descricao}>{descricao}</Text>
                    <Text style={css.preco}>{preco}</Text>
                </View>
                <View style={css.caixaimagem}>
                    <Image source={imagem} style={css.imagem} />
                </View>
            </View>
        </Pressable>
    )
}

const css = StyleSheet.create({
    container: {
        width: "90%",
        height: 110,
        backgroundColor: 'white',
        marginTop: 20,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: 5
    },
    caixatexto: {
        width: "75%",
        marginTop: 5,
        marginLeft: 10
    },
    caixaimagem: {
        width: "20%",
    },
    nome: {
        width: "100%",
        fontSize: 18,
        fontWeight: "bold"
    },
    descricao: {
        width: "100%"
    },
    preco: {
        width: "100%",
        fontWeight: "bold",
        marginTop: 2
    },
    imagem: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
    }
})