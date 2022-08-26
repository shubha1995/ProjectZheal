import { View, StatusBar } from "react-native";
import React from "react";
import Canvas from "../components/Canvas";
import PowerUpYour from "../components/PowerUpYour";

export default function PowerUp() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <Canvas />
      <PowerUpYour />
    </View>
  );
}
