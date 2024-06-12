import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Observacao() {
  return (
    <View>
      <Text>Observacao</Text>
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
  caixa: {
    borderRadius: 7,
    backgroundColor:"#F6EDE8",
    elevation: 5,
    padding: 10,  
    width: "90%"
  },
  
})