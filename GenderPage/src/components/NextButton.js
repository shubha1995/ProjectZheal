import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const NextButton = () => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
  };
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}
      >
        <Image
          style={styles.arrow}
          source={require("../assets/NextButton.png")}
        />
      </TouchableOpacity>

      <View style={styles.homeindicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    top: 190
  },

  roundButton1: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#DA2128",
  },
});

export default NextButton;
