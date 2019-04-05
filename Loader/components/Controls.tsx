import React from "react"
import { StyleSheet, Image, View } from "react-native"

export default () =>
  <View style={{flexDirection: "row", position: "absolute"}}>
    <Image source={require("../icons/play.png")}   style={custom.icon} />
    <Image source={require("../icons/volume.png")} style={custom.icon} />

    <View style={custom.progress}>
      <View style={custom.progressBar} />
    </View>

    <Image source={require("../icons/HD.png")}     style={custom.icon} />
    <Image source={require("../icons/expand.png")} style={custom.icon} />
  </View>

const custom = StyleSheet.create({
  icon: {
    height: 16, width: 16, marginHorizontal: 5,
    tintColor: "white",
  },
  progress: {
    flex: 1, height: 14, borderRadius: 7,
    backgroundColor: "black",
    margin: 10, marginTop: 2,
  },
  progressBar: {
    height: 10, width: 80, borderRadius: 5,
    backgroundColor: "lime",
    margin: 2,
  },
})