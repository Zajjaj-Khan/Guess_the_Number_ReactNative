import { useEffect, useState ,useCallback} from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  //handling  States 
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundState,setRoundState] = useState(0);
  const [guessRound,setGuessRound] = useState(0);
  //Storing picked Number and Seting gam eover screen to false
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  //Loading Fonts
  const [fontsLoaded] = useFonts({
    "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
       await SplashScreen.hideAsync();
    }
 }, [fontsLoaded]);

 if (!fontsLoaded) {
    return null;
 }
//End of Loading fonts code

//handle game Over logic
  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRound(numberOfRounds);
  };
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }
  //Handle which screen to render
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundNumber={guessRound} onStartNewGame={startNewGameHandler}/>;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.assent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}  onLayout={onLayoutRootView}>{screen}</SafeAreaView>
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
