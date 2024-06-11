import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {
    const [pets, setPets ] = useState( [] );
    const [error, setError ] = useState(false);
    const [busca, setBusca] = useState(false);
    const [filtro, setFiltro ] = useState(false);

    async function getPets()
    {
        await fetch('http://10.139.75.18/api/Animais/GetAllAnimais', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => ( res.ok == true ) ? res.json() : false )
            .then( json => setPets( json ) )
            .catch( err => setError( true ) )
    }

    useEffect( () => {
        getPets();
    }, [] );

    useEffect( () => {
        setFiltro( pets.filter( (item) => item.animalNome == busca )[0] );
    }, [busca] );

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar animais"
                    placeholderTextColor="#C39FE9"
                    TextInput={busca}
                    onChangeText={(digitado) => setBusca( digitado ) }
                />
            </View>
            { filtro && <Text style={css.text}>{filtro.animalNome} </Text> }
            { ( !filtro && busca ) && <ActivityIndicator size="large" color="#E3AB1D" /> }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FBF6F3",
    },
    text: {
        color: "black",
        marginTop: 20
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "90%",
        height: 60,
        borderWidth: 3,
        borderColor: "#7723CD",
        borderRadius: 8,
        padding: 10,
        color: "black"
    }
})