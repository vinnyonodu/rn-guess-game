import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'vinnybold-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'vinnyregular-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
    )
  }

  const startGameScreenHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);

  }
  const showStartGameSCreen = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameScreenHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen noOfRounds={guessRounds} number={userNumber} onShowStartGame={showStartGameSCreen} />
  }

  return (
    <View style={styles.screen}>
      <Header title={'GUESS A NUMBER'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
