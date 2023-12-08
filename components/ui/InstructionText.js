import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";
const InstructionText = ({ children, style }) => {
  //Can overwrite the default depending on the second argument
  return <Text style={[styles.instrucText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instrucText: {
    color: Colors.assent500,
    fontSize: 25,
    fontFamily:"open-sans-bold"
  },
});
