import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, View } from "react-native";

const MovingDisplay = ({ children, ...props }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const screenWidth = 80;

    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -screenWidth,
          duration: 8000,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 8000,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
      ])
    ).start();
  }, [translateX]);

  return (
    <View style={{ ...props.style }}>
      <Animated.Text
        style={{
          ...styles.movingText,
          transform: [{ translateX }],
        }}
      >
        {children}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movingText: {
    fontSize: 24, // Adjust the size of the text
    whiteSpace: "nowrap", // Keep the text on a single line
  },
});

export default MovingDisplay;
