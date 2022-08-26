import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Canvas = () => {
  return (
    <View style={styles.canvas}>
      <LinearGradient
        colors={["#7E3517", "#0C090A", "#000000"]}
        start={{ x: 1, y: 0.2 }}
        end={{ x: 0.1, y: 1 }}
      >
        <Image
          style={styles.triangle}
          source={require("../../assets/Group.png")}
        />
        <View style={styles.Power}>
          <Text style={styles.PowerUpYour}>Power Up Your</Text>
          <Text style={styles.Zheal}>Zheal</Text>
          <Text style={styles.text3}>
            We help you to sleep better and rest so that you reach your true
            potential each day.
          </Text>

          <View style={{ flexDirection: "row", top: 60 }}>
            <View style={styles.RectangleShapeView1} />
            <View style={styles.RectangleShapeView2} />
            <View style={styles.RectangleShapeView3} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: 500,
    backgroundColor: "black",
  },

  triangle: {
    height: 450,
    width: 330,
    left: 30,
    top: 60,
  },
  Power: {
    height: "100%",
    top: 55,
    left: 5,
  },

  PowerUpYour: {
    left: 34,
    fontSize: 28,
    fontStyle: "italic",
    lineHeight: 32,
    color: "#6D6E71",
    top: 10,
  },
  Zheal: {
    top: 15,
    left: 34,
    fontSize: 26,
    fontStyle: "italic",
    lineHeight: 36,
    fontWeight: "bold",
    color: "white",
  },
  text3: {
    height: 40,
    width: 321,
    top: 30,
    left: 34,
    fontSize: 15,
    letterSpacing: 0.19,
    lineHeight: 18,
    color: "#BCBEC0",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  RectangleShapeView1: {
    height: 8,
    width: 10,
    left: 168.9,
    backgroundColor: "#C4C4C4",
  },
  RectangleShapeView2: {
    height: 8,
    width: 30,
    left: 170.44,
    backgroundColor: "#CD181D",
  },
  RectangleShapeView3: {
    height: 8,
    width: 10,
    left: 171.88,
    backgroundColor: "#C4C4C4",
  },
});

export default Canvas;
