import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';

//exibir os desaparecidos:
export default function Home() {

  const [animais, setAnimais] = useState([]);

  async function getAnimais() {
    await fetch('https://fakestoreapi.com/products', { //busca as informaçoes  http://10.139.75.18:5251/api/Animais/GetAllAnimais/
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json()) 
      .then(json => setAnimais(json)) //resultado
      .catch(err => console.log(err))
  }

  useEffect(() => { //filtro que executa oq esta dentro dele: chama get produtos
    getAnimais();
  }, [])

  return (
    <View style={css.container}>
      {animais ? //se tem "produtos"
        <>         
          <FlatList style={css.lista} //se tem produtos: mostra a flat lista
            data={animais} //produtos: todos os produtos q tem no banco [..., ..., ...,]=> le um item de cada vez, um por um 
            renderItem={({ item }) => <Produto title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} />} //item."..." = passa ietm por item (apelido) e chamando oq ele quer do item
            keyExtractor={(item) => item.id} 
            contentContainerStyle={{ height: (animais.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando...</Text> //se N tem produtos: mostra a msg
      }
    </View>
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
  text: {
    color: "#7723CD"
  },
  lista: {
    marginTop: 50
  },
  stories: {
    width: "100%",
    height: 100
  }
})