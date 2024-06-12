import { Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,  } from 'react-native'
import React, { useState } from 'react'

export default function Inserir() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    async function Cadastro()
    {
        await fetch('http://10.139.75.18/api/Usuarios/CreateUsuario', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify( {
              UsuarioNome:nome,
              UsuarioEmail:email,
              UsuarioTelefone:telefone,
              UsuarioSenha:senha
            })
          })

          .then(( res) => res.json(), setEmail(''), setTelefone(''), setNome(''), setSenha(''),)
          .then( json => console.log(json))
          .catch(err => setError( true ) )  
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            {sucesso ?
                <Text style={css.text}>Obrigada por se cadastrar, seu cadastro foi realizado com sucesso!</Text>
                :
            <>
          <Text style={css.titulo}>Insira seus dados:</Text>
    <TextInput
    style={css.input}
    placeholder="Nome "
     value={nome}
     placeholderTextColor="#D3ABFC"
     onChangeText={(digitado) => setNome( digitado)}
     />
     
     <TextInput
     style={css.input}
     placeholder="E-mail"
     value={email}
     placeholderTextColor="#D3ABFC"
     onChangeText={(digitado) => setEmail( digitado)}
    />

    <TextInput
        style={css.input}
        placeholder="Telefone"
        value={telefone}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setTelefone( digitado)}
      />

    <TextInput
        style={css.input}
        placeholder="Senha"
        value={senha}
        placeholderTextColor="#D3ABFC"
        onChangeText={(digitado) => setSenha( digitado)}
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
    msg: {
      backgroundColor: '#b1e6d1',
      borderColor: "#b1e6d1", 
      borderWidth: 3,
      padding: 10,
      borderRadius: 5,
      marginTop: 5,      
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