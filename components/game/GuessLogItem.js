import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.itemStyle}>#{roundNumber}</Text>
      <Text style={styles.itemStyle}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listStyle: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.assent500,
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemStyle:{
    fontFamily:'open-sans'
  }
});
