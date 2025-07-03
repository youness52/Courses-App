import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Colors from "@/constants/colors";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.primary,
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="course/[id]" 
        options={{ 
          title: "Course Details",
          headerBackTitle: "Back",
        }} 
      />
      <Stack.Screen 
        name="category/[id]" 
        options={{ 
          title: "Category",
          headerBackTitle: "Back",
        }} 
      />
      <Stack.Screen 
        name="lesson/[courseId]/[moduleId]/[lessonId]" 
        options={{ 
          title: "Lesson",
          headerBackTitle: "Course",
        }} 
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}