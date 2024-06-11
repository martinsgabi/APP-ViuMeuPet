import { View, Text,TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Observacao from './Observacao';

export default function Detalhe({setDetalhe, animal, animalFoto, setObservacoes }) {

  if( animal ) {
    return (
      <View style={css.caixa}>
        <Text style={css.caixatext1}>{animal.animalNome}</Text>
        <Image source={{ uri: animal.animalFoto}} style={css.imagem} />
        <Text style={css.caixatext}>{animal.animalTipo}</Text>
        <Text style={css.caixatext}>Raça: {animal.animalRaca}</Text>
        <Text style={css.caixatext}>Cor: {animal.animalCor}</Text>
        <Text style={css.caixatext}>Sexo: {animal.animalSexo}</Text>
        <Text style={css.caixatext}>Observações: {animal.animalObservacao}</Text>
        <Text style={css.caixatext}>Desaparecimento: {animal.animalDtDesaparecimento}</Text>
        <Text style={css.caixatext}>{animal.animalStatus}</Text>
        <Text style={css.caixatext}>{animal.usuarioId}</Text>

        <View style={css.botao}>
          <TouchableOpacity onPress={ () => setDetalhe( false ) } style={css.btnVoltar}>
            <Text style={css.btnText}>VOLTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(Observacao)} style={css.btnObservacoes}>
            <Text style={css.btnText}>OBSERVAÇÔES</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return false;
  }
  
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#FBF6F3",
    color: "black",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  caixatext: {
    color: "black",
    marginTop: 10
  },
  caixatext1: {
    color: "#7723CD",
    fontWeight: "bold",
   
  },
  caixa: {
    borderRadius: 7,
    backgroundColor:"#F6EDE8",
    elevation: 5,
    padding: 10,  
    width: "90%"
  },
  botao: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  btnVoltar: {
    width: "30%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 0,
    backgroundColor: "#E3AB1D"
  },
  btnObservacoes: {
    width: "65%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 0,
    backgroundColor: "#E3AB1D"
  },
  btnText: {
      color: "white",
      lineHeight: 45,
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold"
  },
  imagem: {
    minWidth: "100%",
    width: "100%",
    height: 250,
    borderRadius: 7,
    marginTop: 20,
    resizeMode: "cover"
  }
  
})