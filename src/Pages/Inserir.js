import { Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,  } from 'react-native'
import React, { useState } from 'react'

export default function Inserir() {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [tipo, setTipo] = useState('');
    const [cor, setCor] = useState('');
    const [sexo, setSexo] = useState('');
    const [foto, setFoto] = useState('');
    const [desaparecimento, setDesaparecimento] = useState('');
    const [astatus, setAstatus] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [error, setError] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    async function Cadastro()
    {
        await fetch('http://10.139.75.18/api/Animais/CreateAnimal', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify( {
              AnimalNome:nome,
              AnimalRaca:raca,
              AnimalTipo:tipo,
              AnimalCor:cor,
              AnimalSexo:sexo,
              AnimalFoto:foto,
              AnimalDtDesaparecimento:desaparecimento,
              AnimalStatus:astatus,
              UsuarioId:usuarioId
            })
          })

          .then(( res) => res.json(), setRaca(''), setTipo(''), setNome(''), setCor(''), setSexo(''), setFoto(''), setDesaparecimento(''), setAstatus(''), setUsuarioId(''),)
          .then( json => console.log(json))
          .catch(err => setError( true ) )  
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            {sucesso ?
                <Text style={css.text}>Obrigada por se cadastrar, seu cadastro foi realizado com sucesso!</Text>
                :
            <>
          <Text style={css.titulo}>Cadastre seu pet perdido:</Text>
    <TextInput
    style={css.input}
    placeholder="Nome "
     value={nome}
     placeholderTextColor="#D3ABFC"
     onChangeText={(digitado) => setNome( digitado)}
     />
     
     <TextInput
     style={css.input}
     placeholder="Raça"
     value={raca}
     placeholderTextColor="#D3ABFC"
     onChangeText={(digitado) => setRaca( digitado)}
    />

    <TextInput
        style={css.input}
        placeholder="Tipo"
        value={tipo}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setTipo( digitado)}
      />

    <TextInput
        style={css.input}
        placeholder="Cor"
        value={cor}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setCor( digitado)}
      />

<TextInput
        style={css.input}
        placeholder="Sexo"
        value={sexo}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setSexo( digitado)}
      />

      <TextInput
        style={css.input}
        placeholder="Foto"
        value={foto}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setFoto( digitado)}
      />
      <TextInput
        style={css.input}
        placeholder="Data de desaparecimento"
        value={desaparecimento}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setDesaparecimento( digitado)}
      />
      <TextInput
        style={css.input}
        placeholder="Status"
        value={astatus}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setAstatus( digitado)}
      />
      <TextInput
        style={css.input}
        placeholder="Usuario"
        value={usuarioId}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setUsuarioId( digitado)}
      />
    <TouchableOpacity style={css.btn} onPress={Cadastro}>
      <Text style={css.btnText}>CADASTRAR</Text>
    </TouchableOpacity>
        {error && <Text style={css.msg}>Revise seus dados por favor!</Text>}
        </>
        }
        </ScrollView>
    )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#FBF6F3",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
      
    },
    text: {
      color: "black"
    },
    titulo: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: "bold",
      color: "#E3AB1D"
  },
    btn: {
      width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
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
    msg: {
      color: "#7723CD",
      textAlign: "center"    
    },
    input: {
      width: "90%",
        height: 60,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#FBF6F3",
        borderWidth: 3,
        borderColor: "#7723CD",
        color: "black",
       
  }
})
/*const css = StyleSheet.create({
  container: {
    backgroundColor: "#FBF6F3",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  }
})*/