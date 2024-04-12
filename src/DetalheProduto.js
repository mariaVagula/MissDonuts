import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function DetalheProduto({ nome, descricao, imagem, preco, setDetalhe }) {
  return (
    <View style={css.container}>
      <View style={css.caixaimagem}>  
        <Image source={imagem} style={css.imagem} />
      </View>
      <View style={css.caixanome}>
        <Text style={css.nome}>{nome}</Text>
      </View>
      <View style={css.caixadescricao}>
        <Text style={css.descricao}>{descricao}</Text>
      </View>
      <View style={css.caixapreco}>
        <Text style={css.preco}>{preco}</Text>
      </View>
      <View style={css.caixaobservacao}>
        <TextInput style={css.observacao} placeholder='Observações: Faça sua observação aqui 
        (ex: com nozes, sem coberura...)' /> 
      </View>
      <View style={css.caixabotao}>
      <TouchableOpacity style={css.botao}>
          <Text style={css.textobotao}>Adicionar ao Pedido</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setDetalhe(false)} >
        <Text style={css.fechar}>Fechar</Text>
      </TouchableOpacity>
    </View>
  )
}


const css = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD9E7",
    height: "100%"
  },
  caixanome: {
    backgroundColor: "white",
    width: "90%"
  },
  nome: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  caixadescricao: {
    backgroundColor: "white",
    width: "90%"
  },
  descricao: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },
  caixapreco: {
    backgroundColor: "white",
    width: "90%"
  },
  preco: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  caixaobservacao: {
    backgroundColor: "white",
    width: "90%",
    height: 150
  },
  observacao: {
    textAlign: "center",
    width: "85%",
    height: 100,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 26,
    backgroundColor: "#ECE4E4",
  },
  fechar: {
    color: "#B9005D",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10
  },
  caixaimagem: {
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 200,
  },
  imagem: {
    width: "50%",
    height: 180,  
    marginTop: 10
  },
  caixabotao: {
    backgroundColor: "white",
    width: "90%",
    height: 80
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