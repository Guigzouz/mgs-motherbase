import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, View, Dimensions } from "react-native";

const MovingDisplay = ({ children }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const screenWidth = 80;

    // Define the animation sequence to move left -> right -> left
    Animated.loop(
      Animated.sequence([
        // Move text to the right limit
        Animated.timing(translateX, {
          toValue: screenWidth, // Adjust toValue based on the text width
          duration: 8000, // Adjust the duration for the speed
          useNativeDriver: true,
        }),
        // Pause for 2 seconds on the right limit
        Animated.delay(2000),
        // Move text back to the left limit
        Animated.timing(translateX, {
          toValue: 0, // Move back to the left
          duration: 8000, // Adjust the duration for the speed
          useNativeDriver: true,
        }),
        // Pause for 2 seconds on the left limit
        Animated.delay(2000),
      ])
    ).start();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.movingText, { transform: [{ translateX }] }]}
      >
        {children}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden", // Ensure text doesn't overflow the container
    maxWidth: "70%", // Occupies full width of the screen
  },
  movingText: {
    fontSize: 24, // Adjust the size of the text
    whiteSpace: "nowrap", // Keep the text on a single line
  },
});

export default MovingDisplay;
