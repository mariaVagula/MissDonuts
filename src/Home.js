import { Image, Text, View, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View>
            <Image style={css.imagem} source={require('../assets/FundoHome.png')} />
        </View>
    )
}

const css = StyleSheet.create({
    imagem: {
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        width: 390,
        height: 660

    }
})