import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CoursesStackParamList } from "../_layout";

type Props = NativeStackScreenProps<CoursesStackParamList, "CourseDetail">;

export default function CourseDetailScreen({ route }: Props) {
  const { title, description } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  description: { fontSize: 16, textAlign: "center" },
});
