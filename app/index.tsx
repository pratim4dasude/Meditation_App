import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

import beachImage from "@/assets/meditation-images/beach.webp"

import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

import { LinearGradient } from "expo-linear-gradient";

import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

import  CustomButton  from "@/components/CustomButton"

const App = () => {
  return (
    <View className="flex-1">

      <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
        <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 mx=5 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">Meditation</Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplyfing meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton onPress={() => console.log("tap")} title="get started" />


            </View>


            <StatusBar style="light" />

          </SafeAreaView>

        </LinearGradient>

      </ImageBackground>


    </View>
  )
}

export default App


