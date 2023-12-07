import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.assent500,
    padding: 24,
    borderRadius: 8,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.assent500,
    fontSize: 48,
    fontWeight: "bold",
  },
});
