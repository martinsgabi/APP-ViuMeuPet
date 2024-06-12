import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Detalhe({ setDetalhe, animal }) {

    const [observacao, setOservacao ] = useState(false);
    const [observacoesDescricao, setObservacoesDescricao] = useState('');
    const [observacoesLocal, setObservacoesLocal] = useState('');
    const [observacoesData, setObservacoesData] = useState('');
    const [animaisId, setAnimaisId] = useState('');
    const [usuarioId, setUsuarioId] = useState('');

    async function OBS()
    {
        await fetch('http://10.139.75.18/api/Observacoes/CreateObservacao', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify( {
                observacoesDescricao:observacoesDescricao,
                observacoesLocal:observacoesLocal,
                observacoesData:observacoesData,
                animaisId:animaisId,
                usuarioId:usuarioId
            })
          })

          .then(( res) => res.json(), setObservacoesDescricao(''), setObservacoesLocal(''), setObservacoesData(''), setAnimaisId(''), setUsuarioId(''))
          .then( json => console.log(json))
          .catch(err => setError( true ) )  
    }

    return (
        <ScrollView style={css.caixa}>
            <Text style={css.caixatext1}>{animal.animalNome}</Text>
            <Image source={{ uri: animal.animalFoto }} style={css.imagem} />
            <Text style={css.caixatext}>{animal.animalTipo}</Text>
            <Text style={css.caixatext}>Raça: {animal.animalRaca}</Text>
            <Text style={css.caixatext}>Cor: {animal.animalCor}</Text>
            <Text style={css.caixatext}>Sexo: {animal.animalSexo}</Text>
            <Text style={css.caixatext}>Observações: {animal.animalObservacao}</Text>
            <Text style={css.caixatext}>Desaparecimento: {animal.animalDtDesaparecimento}</Text>
            <Text style={css.caixatext}>{animal.animalStatus}</Text>
            <Text style={css.caixatext}>{animal.usuarioId}</Text>
            <View style={css.botao}>
                <TouchableOpacity onPress={setDetalhe} style={css.btnVoltar}>
                    <Text style={css.btnText}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOservacao(true)} style={css.btnObservacoes}>
                    <Text style={css.btnText}>OBSERVAÇÔES</Text>
                </TouchableOpacity>

                
            </View>
            {
                observacao && 
                    <View>
                        <TextInput
                        style={css.input}
                        placeholder="Descrição"
                        value={observacoesDescricao}
                        placeholderTextColor="#F7E097"
                        onChangeText={(digitado) => setObservacoesDescricao( digitado)}
                        />
                        <TextInput
                        style={css.input}
                        placeholder="Local"
                        value={observacoesLocal}
                        placeholderTextColor="#F7E097"
                        onChangeText={(digitado) => setObservacoesLocal( digitado)}
                        />
                        <TextInput
                        style={css.input}
                        placeholder="Data"
                        value={observacoesData}
                        placeholderTextColor="#F7E097"
                        onChangeText={(digitado) => setObservacoesData( digitado)}
                        />
                        <TextInput
                        style={css.input}
                        placeholder="Animal"
                        value={animaisId}
                        placeholderTextColor="#F7E097"
                        onChangeText={(digitado) => setAnimaisId( digitado)}
                        />
                        <TextInput
                        style={css.input}
                        placeholder="Usuário"
                        value={usuarioId}
                        placeholderTextColor="#F7E097"
                        onChangeText={(digitado) => setUsuarioId( digitado)}
                        />

                        <TouchableOpacity style={css.btn} onPress={() => OBS(true)}>
                            <Text style={css.btnText}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                    
                }
        </ScrollView>
    )

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
        marginTop: 30,
        backgroundColor: "#F6EDE8",
        elevation: 5,
        padding: 10,
        width: "90%"
    },
    botao: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    btn: {
        width: "100%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 10,
          borderWidth: 0,
          backgroundColor: "#E3AB1D"
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
    },
    input: {
        width: "100%",
          height: 60,
          marginTop: 20,
          borderRadius: 10,
          marginBottom: 15,
          padding: 15,
          backgroundColor: "#F6EDE8",
          borderWidth: 3,
          borderColor: "#E3AB1D",
          color: "black",
         
    }

})