import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ShopStackParamList } from "../_layout";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

const PRODUCTS = [
  { id: "1", name: "Laptop", description: "A powerful laptop for work and play." },
  { id: "2", name: "Mouse", description: "Ergonomic wireless mouse." },
  { id: "3", name: "Keyboard", description: "Mechanical keyboard with RGB lighting." },
];

export default function ProductListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate("ProductDetail", { productId: item.id, name: item.name, description: item.description })}
            accessibilityRole="button"
            accessibilityLabel={`View details for ${item.name}`}
          >
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
