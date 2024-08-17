import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

import beachImage from "@/assets/meditation-images/beach.webp"

import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View className="flex-1">

      <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
        
        <Text>App</Text>
      </ImageBackground>

      
    </View>
  )
}

export default App


