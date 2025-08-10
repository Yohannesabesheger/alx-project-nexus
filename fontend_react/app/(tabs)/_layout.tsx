import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Tabs screenOptions={{tabBarActiveTintColor:"teal"}} >
    
    <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => 
        <MaterialCommunityIcons 
        size={28} 
        name="home" 
        color={color} />,
        }}
      />
    <Tabs.Screen
      name="search"
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => 
        <MaterialCommunityIcons 
        size={28} 
        name="store-search" 
        color={color} />,
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => 
        <MaterialCommunityIcons 
        size={28} 
        name="account-child-circle" 
        color={color} />,
      }}
    />
  </Tabs>;
}