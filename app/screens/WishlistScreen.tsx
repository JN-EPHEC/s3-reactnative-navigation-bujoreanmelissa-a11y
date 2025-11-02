import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wishlist :</Text>
      <Text style={styles.item}>• Voiture</Text>
      <Text style={styles.item}>• Chaussures</Text>
  <Text style={styles.item}>• Iphone</Text>
      <Text style={styles.item}>• Sac à main</Text>
      <Text style={styles.item}>• Robe</Text>
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
    marginBottom: 12,
  },
  item: {
    fontSize: 18,
    color: "#000",
    fontStyle: "normal",
    fontWeight: "normal",
    marginBottom: 6,
    alignSelf: "flex-start",
    marginLeft: 32,
  },
});
