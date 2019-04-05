// @ts-check
import React from "react"
import { AppRegistry, ImageBackground } from "react-native"
import Controls from "./components/Controls"
import { name } from "./app.json"

export default function VideoPlayer(){
  return (
    <ImageBackground source={{uri: "https://s3.amazonaws.com/crysfel/public/book/new-york.jpg"}}
                     style={{height: "100%", width: "100%"}}>
      <Controls />
    </ImageBackground>
  )
}

AppRegistry.registerComponent(name, () => VideoPlayer)