import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, ToastAndroid, View, StyleSheet } from "react-native";
import { Digit } from './Digit';

export const DigitGroup = ({ id, number }) =>{
  const { currentDigit, setCurrentDigit } = number;
  const numberArray = currentDigit.toString().split('').map(Number);

  useEffect(()=>{
    console.log("DigitGroup [currentDigit]: "+currentDigit);
  },[currentDigit]);

  const updateDigit = (index, newDigit) => {
    /* const updatedArray = [...numberArray];
    updatedArray[index] = isNaN(newDigit)?'*':newDigit;
    const updatedNumber = updatedArray.join('');
    console.log("updatedNumber [updateDigit]: "+updatedNumber);
    setCurrentDigit(updatedNumber); */
    setCurrentDigit((prevNumber) => {
      const updatedArray = [...prevNumber.toString()].map(Number);
      updatedArray[index] = isNaN(newDigit) ? '*' : newDigit;
      const updatedNumber = updatedArray.join('');
      console.log("updatedNumber [updateDigit]: " + updatedNumber);
      return updatedNumber;
    });
  };

  return (<>
   {currentDigit.toString().split('')?.map((num, i)=>{
    return (<Digit id={id+'|'+i} key={id + '|' + i} number={num} updateDigit={(newDigit) => updateDigit(i, newDigit)} />);
   })}
    <View style={{ position: 'absolute', color:'#000', zIndex:4, bottom: -25, right: -20 }}>
      <Text style={{ fontSize: 22 }}>({currentDigit})</Text>
    </View>
  </>);
};