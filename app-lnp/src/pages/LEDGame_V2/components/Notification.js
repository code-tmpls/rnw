import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground, Animated } from "react-native";

export const OutOfMovesNotification = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1 second
      useNativeDriver: true,
    }).start();

    /*// Fade out animation after 10 seconds
    const fadeOutTimer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // 1 second
        useNativeDriver: true,
      }).start();
    }, 10000);

    return () => clearTimeout(fadeOutTimer); */
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: '#ffca7c',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 6,
        opacity: fadeAnim,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>You're unsuccessful!</Text>
      <Text style={{ fontWeight: 'bold' }}>(Out of Moves)</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ borderWidth: 2, borderRadius: 6, fontSize:12, fontWeight:'bold', padding: 8, margin: 10, backgroundColor: '#fff' }}>Back to Main Menu</Text>
        <Text style={{ borderWidth: 2, borderRadius: 6, fontSize:12, fontWeight:'bold', padding: 8, margin: 10, backgroundColor: '#fff' }}>Retry the Problem</Text>
      </View>
    </Animated.View>
  );
};
