import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CoursesStackParamList } from "../_layout";

type Props = NativeStackScreenProps<CoursesStackParamList, "CourseList">;

const COURSES = [
  { id: "1", title: "Intro to React Native", description: "Learn the basics of React Native." },
  { id: "2", title: "Advanced JavaScript", description: "Deep dive into JS concepts." },
  { id: "3", title: "UI/UX for Developers", description: "Design beautiful and usable apps." },
];

export default function CourseListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate("CourseDetail", { courseId: item.id, title: item.title, description: item.description })}
            accessibilityRole="button"
            accessibilityLabel={`View details for ${item.title}`}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0" },
  list: { padding: 16 },
  item: {
    padding: 16,
    borderRadius: 8,
  backgroundColor: "#90EE90",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006400",
  },
});
