import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ADD8E6",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export default Button;
