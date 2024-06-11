import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Detalhes from '../Components/Detalhe';


//exibir os desaparecidos:
export default function Home() {

  const [animais, setAnimais] = useState([]);
  const [detalhe, setDetalhe ] = useState(false);
  const [animal, setAnimal] = useState();
  

  async function getAnimais() {
    await fetch('http://10.139.75.18/api/Animais/GetAllAnimais', { //busca as informaçoes  http://10.139.75.18:5251/api/Animais/GetAllAnimais/
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json()) 
      .then(json => setAnimais(json)) //resultado
      .catch(err => console.log(err))
  }

  async function getAnimalDetalhes(id) {
    await fetch('http://10.139.75.18/api/Animais/GetAnimalId/' + id, { //busca as informaçoes  http://10.139.75.18:5251/api/Animais/GetAllAnimais/
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json()) 
      .then(json => setAnimal( json ) ) //resultado
      .catch(err => console.log(err))
  }

  useEffect(() => { //filtro que executa oq esta dentro dele: chama get produtos
    getAnimais();
  }, [])

  return (
    <View style={css.container}>
      {animais && !detalhe && //se tem "produtos"
        <>         
        <Text style={css.titulo}>Desaparecidos</Text>
          <FlatList style={css.lista} //se tem produtos: mostra a flat lista
            data={animais} //produtos: todos os produtos q tem no banco [..., ..., ...,]=> le um item de cada vez, um por um 
            renderItem={({ item }) => <Produto setDetalhe={setDetalhe} animalNome={item.animalNome} animalFoto={item.animalFoto} getAnimalDetalhes={() => getAnimalDetalhes(item.animaisId)} />} //item."..." = passa ietm por item (apelido) e chamando oq ele quer do item
            keyExtractor={(item) => item.animaisId} 
            contentContainerStyle={{ height: (animais.length * 600) + 110 }}
          />
          
        </>
      }
      { !animais && !detalhe &&
        <Text style={css.text}>Carregando...</Text>
      }
      { detalhe && <Detalhes setDetalhe={setDetalhe} animal={animal} /> }
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
  titulo: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    color: "#E3AB1D"
},
  text: {
    color: "#7723CD"
  },
  lista: {
    
    
  },
  
})