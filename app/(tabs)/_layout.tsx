import React from "react";
import { Tabs } from "expo-router";
<<<<<<< HEAD
import { Feather } from "@expo/vector-icons";
=======
import { Home, BookOpen, Bookmark, User } from "lucide-react-native";
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
import Colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.border,
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTitleStyle: {
          fontWeight: '600',
          color: Colors.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <Feather name="home" size={22} color={color} />,
=======
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
        }}
      />
      <Tabs.Screen
        name="my-courses"
        options={{
          title: "My Courses",
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <Feather name="book-open" size={22} color={color} />,
=======
          tabBarIcon: ({ color }) => <BookOpen size={22} color={color} />,
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={22} color={color} />,
=======
          tabBarIcon: ({ color }) => <Bookmark size={22} color={color} />,
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <Feather name="user" size={22} color={color} />,
=======
          tabBarIcon: ({ color }) => <User size={22} color={color} />,
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
        }}
      />
    </Tabs>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
