import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../themes/default";

interface ButtonProps {
  type: "add" | "remove";
  onPress: () => void;
}

export function AddButton({ type, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 52,
    height: 52,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blueDark,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.gray100,
  },
});
