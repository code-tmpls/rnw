import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const ShakeText = ({ text }) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shake = () => {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: false }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: false }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: false }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: false }),
      ]).start(() => shake());
    };

    shake();
  }, [shakeAnimation]);

  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <Text style={styles.shakeText}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shakeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ShakeText;
