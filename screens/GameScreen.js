import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../constants/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import CustomButton from "../components/ui/CustomButton";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBaundary = 1;
let maxBaundary = 100;
const GameScreen = ({ userNumber ,onGameOver}) => {
  console.log(userNumber);
  const initailGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initailGuess);

  function nextGuessHandler(direction) {
    //direction => lower,greater
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "You know its a wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBaundary = currentGuess;
    } else {
      minBaundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      1,
      100,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  useEffect(()=>{
    if(currentGuess===userNumber){
      onGameOver();
    }
  },[currentGuess,userNumber,onGameOver])
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </CustomButton>
        </View>
        <View>{/* Log View */}</View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
