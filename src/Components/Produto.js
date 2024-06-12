import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Produto({ animalNome, animalFoto, setDetalhe }) {
    return (
        <View style={css.container}>
            <View style={css.caixa}>
                <View style={css.boxTitle}>
                    <Text style={css.animalNome}>{animalNome}</Text>
                </View>
                <View style={css.boxImage}>
                    <Image source={{ uri: animalFoto }} style={css.imagem}/>
                </View>
                <TouchableOpacity onPress={setDetalhe} style={css.btnDetalhes}>
                    <Text style={css.btnDetalhesText}>DETALHES</Text>
                </TouchableOpacity>
          </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        minWidth: "90%",
        borderRadius: 5,
        width: "100%",   
        marginTop: 20,
       
    }, 
    caixa: {
        borderRadius: 7,
        borderColor:"#7723CD",
        borderWidth: 3,
        alignItems: "center",
        padding: 7,
        
    },
    
    boxTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5,
        
    },
    animalNome: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    boxImage: {
        width: "90%",
        height: 250,
        alignItems: "center"
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    /*categoryBox: {
        width: "100%",
        marginTop: 15
    },
    descriptionBox: {
        width: "100%",
        marginTop: 15,
        padding: 10
    },
    descriptionText: {
        color: "black",
        textAlign: "justify"
    },
    categoryBox: {
        width: "100%",
        padding: 10
    },
    categoryText: {
        color: "black"
    },*/
    btnDetalhes: {
        width: 90,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        borderWidth: 0,
        backgroundColor: "#E3AB1D"
    },
    btnDetalhesText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
})

//<View style={css.descriptionBox}>
//<Text style={css.descriptionText}>{description}</Text>
//</View>
//<View style={css.categoryBox}>
    //<Text style={css.categoryText}>{category}</Text>
//</View>