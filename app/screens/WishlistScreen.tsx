import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your wishlist is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D2B48C",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#654321",
  },
});
