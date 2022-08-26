import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PowerUpYour = () => {
  return (
    <View style={styles.footer}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyleContainer}>
          <TouchableOpacity>
            <Text style={styles.button1}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button2}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homeindicator} />
    </View>
  );
};

export default PowerUpYour;

const styles = StyleSheet.create({
  buttonStyleContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 42,
    marginRight: 50,
    justifyContent: "space-between",
  },
  footer: { 
    backgroundColor: "black", 
    marginTop: 250,
    top: -40
  },

  button1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    color: "white",
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 10,
    paddingTop: 10,
    letterSpacing: 2,
  },
  button2: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    color: "white",
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 10,
    paddingTop: 10,
    letterSpacing: 2,
    backgroundColor: "#DA2128",
  },
  homeindicator: {
    height: 5,
    width: 144,
    top: 65,
    left: 130,
    backgroundColor: "#C4C4C4",
    borderRadius: 5,
  },
});
