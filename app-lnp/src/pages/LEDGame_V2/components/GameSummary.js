import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground } from "react-native";
import { getAppContext, ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';

export const GameSummary = () =>{
    const { contextData, setContextData, deleteContextData  } = getAppContext();

    const reset = () =>{

    };

    return (
    <View style={styles.gameSummaryView}>
      <View style={styles.indexView}>
        <Text style={styles.index}>PROBLEM</Text><Text style={{ fontSize: 18, fontWeight:'bold' }}>#1</Text>
      </View>
      <View style={styles.indexView}>
        <Text style={styles.index}>SCORE</Text><Text  style={{ fontSize: 14 }}>0</Text>
      </View>
      <View style={styles.indexView}>
        <Text style={styles.index}>MOVES</Text><Text style={{ fontSize: 14 }}>{contextData?.moveCounter} / {contextData?.totalMoves}</Text>
      </View>
      <TouchableOpacity onPress={()=>reset()}>
        <View style={[styles.indexView,{ borderWidth: 1, borderRadius: 8 }]}>
          <Text style={styles.index}>RESET</Text>
          <Icon name="refresh" size={18} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
    );
  };

  const styles = StyleSheet.create({
    gameSummaryView: { flexDirection:'row' },
    indexView: { alignItems:'center', zIndex: 3, marginTop: 40, marginLeft: 15, padding: 5 },
    index: { fontFamily:'QutcoyTrial' }
  });

