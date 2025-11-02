import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* ...existing code... */}
      <Text style={styles.title}>Profile</Text>
      <Text>Name: Melissa Bujorean</Text>
      <Text>Username: @melbuj</Text>
      <Text>Email: m.bujorean@students.ephec.be</Text>
      <Text>bio: E-business student at EPHEC</Text>
      <Text>passion: read a book, jogging</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  backgroundColor: "#FFD1DC",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
