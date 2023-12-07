import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber, setUSerNumber] = useState();
  const [gameOver,setGameOver]= useState(true);
  function pickedNumberHandler(pickedNumber) {
    setUSerNumber(pickedNumber);
    setGameOver(false);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if(gameOver && userNumber){
    screen=<GameOver/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.assent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
