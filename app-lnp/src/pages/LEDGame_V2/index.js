import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground } from "react-native";
import { GameSummary } from './components/GameSummary';
import DisplayProblem from './components/DisplayProblem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAppContext, ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';

export const LEDGame = () => {
  const ref = useRef();
  const part1 = 10;
  const part2 = 12;
  const result = 22;
  const pickedItem = {};
  const moveCounter = 0;
  const totalMoves = 1;
  const reset = false;
  
  const resetFunc = ()=>{
    ref?.current?.reset();
  };

  const ProblemTitle = ()=>{
    return (<View style={styles.problemTitleView}>
      <Text style={styles.problemTitle}>Could you solve the Problem - only in 1 move?</Text>
    </View>);
  };

  return (<ContextProvider variables={{ part1, part2, result, reset, pickedItem, moveCounter, totalMoves }}>
    <ImageBackground source={require('@AppAssets/images/bg.jpg')} style={styles.backgroundImage}>
      <StatusBar translucent backgroundColor="white" style="auto" height="5%"  />
      <GameSummary reset={resetFunc} />
      <View style={styles.container}>
        <ProblemTitle />
        <DisplayProblem ref={ref} />
      </View>
  </ImageBackground>
  </ContextProvider>);
};

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'flex-start' },
  problemTitleView: { alignItems:'center', marginTop: 1 },
  problemTitle: { fontFamily:'HandycheeraRegular', fontSize:18 },
  container:{ flex: 1, width:'100%', position: 'relative', paddingTop: StatusBar.currentHeight }
});