import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground } from "react-native";
import { DigitGroup } from './components/DigitGroup';
import { Alpha } from './components/Alpha';

export const LEDGame = () => {

  const GameSummary = () =>{
    return (<View style={styles.gameSummaryView}>
      <View style={styles.indexView}>
        <Text style={styles.index}>PROBLEM</Text><Text>#1</Text>
      </View>
      <View style={styles.indexView}>
        <Text style={styles.index}>SCORE</Text><Text>0</Text>
      </View>
    </View>);
  };

  const ProblemTitle = ()=>{
    return (<View style={styles.problemTitleView}>
      <Text style={styles.problemTitle}>Could you solve the Problem - only in 1 move?</Text>
    </View>);
  };

  const DisplayProblem = ({ part1, part2, result })=>{
    const [p1,setP1] = useState(part1);
    const [p2,setP2] = useState(part2);
    const [r,setR] = useState(result);

    useEffect(()=>{
      if( parseInt(p1) + parseInt(p2) === parseInt(r) ){
        ToastAndroid.show("Problem Solved", ToastAndroid.LONG);
      }
      console.log(p1+"+"+p2+"="+r);
    },[p1,p2, r]);

    return ( <View style={{ marginTop: 15, justifyContent:'center', alignItems:'center' }}>
    <View style={{  flexDirection:'row' }}>
      <DigitGroup number={part1} setNumber={setP1} />
    </View>
    <View style={{ flexDirection:'row' }}>
      <Text style={{ fontSize:58, color:'#000' }}>+</Text>
    </View>
    <View style={{ marginTop:5, flexDirection:'row' }}>
      <DigitGroup number={part2} setNumber={setP2} />
    </View>
    <View style={{ marginTop:30, width:'45%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
    <View style={{ marginTop:15, flexDirection:'row' }}>
      <DigitGroup number={result} setNumber={setR} />
    </View>
    <View style={{ marginTop:15, width:'45%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
  </View>);
  };
  return (
    <ImageBackground source={require('@AppAssets/images/bg.jpg')} style={styles.backgroundImage}>
      <StatusBar translucent backgroundColor="white" style="auto" height="5%"  />
      <GameSummary />
      <View style={styles.container}>
        <ProblemTitle />
        <DisplayProblem part1={5} part2={9} result={9} />
      </View>
  </ImageBackground>);
};

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'flex-start' },
  gameSummaryView: { flexDirection:'row' },
  indexView: { alignItems:'center', zIndex: 3, marginTop: 50, marginLeft: 15 },
  index: { fontFamily:'QutcoyTrial' },
  problemTitleView: { alignItems:'center', marginTop: 20 },
  problemTitle: { fontFamily:'HandycheeraRegular', fontSize:18 },
  container:{ flex: 1, width:'100%', position: 'relative', paddingTop: StatusBar.currentHeight }
});