// @ts-check
import React from "react"
import { AppRegistry, View, Text } from "react-native"
import { name } from "./app.json"

export default function Loader(){
  return (
    <View>
      <Text>working!</Text>
    </View>
  )
}

AppRegistry.registerComponent(name, () => Loader)