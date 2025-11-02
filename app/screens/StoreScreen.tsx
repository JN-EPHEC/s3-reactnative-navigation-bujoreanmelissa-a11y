import * as React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export default function StoreScreen() {
  const handleBuy = (item: string) => {
    Alert.alert("Achat", `Vous avez acheté ${item} !`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boutique</Text>
      <View style={styles.productsRow}>
        <View style={styles.productBox}>
          <Text style={styles.productName}>Chaussures</Text>
          <Text style={styles.productPrice}>109,99 €</Text>
          <Pressable style={styles.buyButton} onPress={() => handleBuy("les chaussures")}
            accessibilityRole="button" accessibilityLabel="Acheter chaussures">
            <Text style={styles.buyButtonText}>Acheter</Text>
          </Pressable>
        </View>
        <View style={styles.productBox}>
          <Text style={styles.productName}>Montre</Text>
          <Text style={styles.productPrice}>499,99 €</Text>
          <Pressable style={styles.buyButton} onPress={() => handleBuy("la montre")}
            accessibilityRole="button" accessibilityLabel="Acheter montre">
            <Text style={styles.buyButtonText}>Acheter</Text>
          </Pressable>
        </View>
        <View style={styles.productBox}>
          <Text style={styles.productName}>Bijou en or</Text>
          <Text style={styles.productPrice}>899,99 €</Text>
          <Pressable style={styles.buyButton} onPress={() => handleBuy("le bijou en or")}
            accessibilityRole="button" accessibilityLabel="Acheter bijou en or">
            <Text style={styles.buyButtonText}>Acheter</Text>
          </Pressable>
        </View>
        <View style={styles.productBox}>
          <Text style={styles.productName}>Sac à main</Text>
          <Text style={styles.productPrice}>149,99 €</Text>
          <Pressable style={styles.buyButton} onPress={() => handleBuy("le sac à main")}
            accessibilityRole="button" accessibilityLabel="Acheter sac à main">
            <Text style={styles.buyButtonText}>Acheter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
  },
  productsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 16,
  },
  productBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginHorizontal: 8,
    minWidth: 140,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: "#006400",
    marginBottom: 12,
  },
  buyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
