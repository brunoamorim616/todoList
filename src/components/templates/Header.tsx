import React from "react";
import { Image, StyleSheet, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    alignItems: "center",
  },
  image: {
    width: 128,
    height: 34,
  },
});
