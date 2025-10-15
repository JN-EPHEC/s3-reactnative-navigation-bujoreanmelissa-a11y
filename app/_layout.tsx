import "react-native-reanimated";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";


export type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

export type CoursesTabParamList = {
  AllCourses: undefined;
  Wishlist: undefined;
};

export type RootDrawerParamList = {
  Courses: undefined;
  Profile: undefined;
};

export default function RootLayout() {
  const Drawer = createDrawerNavigator<RootDrawerParamList>();
  const Tab = createBottomTabNavigator<CoursesTabParamList>();
  const Stack = createNativeStackNavigator<CoursesStackParamList>();

  function CoursesStackNavigator({ navigation }: any) {
    return (
      <Stack.Navigator initialRouteName="CourseList">
        <Stack.Screen
          name="CourseList"
          component={CourseListScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 24 }}>☰</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={{
            title: "Course Details",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 24 }}>☰</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

  function CoursesTabNavigator({ navigation }: any) {
    return (
      <Tab.Navigator
        initialRouteName="AllCourses"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon = "";
            if (route.name === "AllCourses") icon = "📚";
            else if (route.name === "Wishlist") icon = "�";
            return <Text style={{ fontSize: focused ? 22 : 18 }}>{icon}</Text>;
          },
          tabBarLabelStyle: { fontSize: 14 },
        })}
      >
        <Tab.Screen
          name="AllCourses"
          children={props => <CoursesStackNavigator {...props} />}
          options={{ tabBarLabel: "Browse" }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{ tabBarLabel: "My Wishlist" }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={CoursesTabNavigator} options={{ drawerLabel: "All Courses" }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerLabel: "My Profile" }} />
    </Drawer.Navigator>
  );
}
