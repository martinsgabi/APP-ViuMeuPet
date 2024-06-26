import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Cadastro from '../Components/Cadastro';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const { Login, error, cadastro, setCadastro } = useContext(AuthContext);

    function RealizaLogin() {
        Login(email, senha);
    }
    return (
        <View style={css.tela}>
            {cadastro != true ?
                <ScrollView contentContainerStyle={css.container}>
                    <Image source={require("../../assets/logo- viu meu pet.png")} style={css.logo} />
                    <TextInput
                        inputMode="email"
                        placeholder="Email do Usuário"
                        style={css.input}
                        value={email}
                        onChangeText={(digitado) => setEmail(digitado)}
                        placeholderTextColor="#D3ABFC"
                    />
                    <TextInput
                        inputMode="text"
                        placeholder="Senha"
                        secureTextEntry={true}
                        style={css.input}
                        value={senha}
                        onChangeText={(digitado) => setSenha(digitado)}
                        placeholderTextColor="#D3ABFC"
                    />
                    
                    <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                        <Text style={css.btnLoginText}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnLogin} onPress={() => setCadastro(true)}>
                        <Text style={css.btnLoginText}>CADASTRA-SE</Text>
                    </TouchableOpacity>
                    {error &&
                        <View style={css.error}>
                            <Text style={css.errorText}>email ou senha incorretos</Text>
                        </View>
                    }
                </ScrollView>
                :
                <Cadastro></Cadastro>
            }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        
    },
    tela: {
        backgroundColor: "#FBF6F3"
    },
    logo: {
        width: "50%",
        resizeMode: "contain",
        marginTop: 50
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

    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#E3AB1D",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 0,
        backgroundColor: "#E3AB1D",
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "#7723CD",
        textAlign: "center",
        fontWeight: "bold"
    }
});