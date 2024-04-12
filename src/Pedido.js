import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Confirma from './Confirma';
import Rastreio from './Rastreio';
import FimPedido from './FimPedido';


export default function Pedido({ navigation }) {

  const [confirma, setConfirma] = useState(false);
  const [rastreio, setRastreio] = useState(false);
  const [fim, setFim] = useState(false);

  if (!fim == false) {
    return (<FimPedido setConfirma={setConfirma} setRastreio={setRastreio} setFim={setFim} navigation={navigation} />)
  }
  if (!confirma == false) {
    return (<Confirma setConfirma={setConfirma} setRastreio={setRastreio} setFim={setFim} />)
  }
  if (!rastreio == false) {
    return (<Rastreio setRastreio={setRastreio} setConfirma={setConfirma} setFim={setFim} />)
  }

  return (
    <View style={css.container}>
      <View style={css.caixatitulo}>
        <Text style={css.titulo}>Seu pedido</Text>
      </View>
      <View>
        <View style={css.rosa}>
          <Text style={css.texto}>Homer</Text>
        </View>
        <View style={css.branco}>
          <Text style={css.texto}>R$ 10,00</Text>
        </View>
      </View>
      <View>
        <View style={css.rosa}>
          <Text style={css.texto}>Red Velvet</Text>
        </View>
        <View style={css.branco}>
          <Text style={css.texto}>R$ 14,00</Text>
        </View>
      </View>
      <View >
        <Text style={css.texto3}>+ Adicionar mais itens</Text>
      </View>
      <View style={css.caixatitulo}>
        <Text style={css.titulo}>Forma de Pagamento</Text>
      </View>
      <View style={css.caixabotaopagamento}>
        <TouchableOpacity style={css.botaopagamento}>
          <Text style={css.textobotao}>Dinheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botaopagamento}>
          <Text style={css.textobotao}>Cartão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botaopagamento}>
          <Text style={css.textobotao}>PIX</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setConfirma(true)} style={css.botao}>
        <Text style={css.textobotao}>Finalizar pedido</Text>
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
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#EEAACC",
    marginTop: 5,
    marginBottom: 10
  },
  titulo: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold"
  },
  rosa: {
    width: "90%",
    height: 40,
    backgroundColor: "#EEAACC",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10
  },
  branco: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10
  },
  texto: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10
  },
  texto2: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    borderRadius: 6,
  },
  texto3: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    height: 50,
    backgroundColor: "#EEAACC",
    marginTop: 20,
    borderRadius: 5
  },
  textobotao: {
    fontSize: 16,
    fontWeight: "500"
  },
  botaopagamento: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    display: "flex",
    flex: 3,
  },
  textobotao: {
    fontSize: 16,
    fontWeight: "500"
  },
  caixabotaopagamento: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: "100%",
    padding: 10
  }
})