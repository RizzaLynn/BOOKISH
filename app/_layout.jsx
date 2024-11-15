import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
        "NewAmsterdam-Regular": require("../assets/fonts/NewAmsterdam-Regular.ttf"),
        "ConcertOne-Regular": require("../assets/fonts/ConcertOne-Regular.ttf"),
        "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf"),
        "LazyDog-Regular": require("../assets/fonts/LazyDog-Regular.ttf"),
        "Skrapbook-Regular": require("../assets/fonts/Skrapbook-Regular.ttf"),
        "Signika-Bold": require("../assets/fonts/Signika-Bold.ttf"),
        "Signika-Light": require("../assets/fonts/Signika-Light.ttf"),
        "Signika-Medium": require("../assets/fonts/Signika-Medium.ttf"),
        "Signika-Regular": require("../assets/fonts/Signika-Regular.ttf"),
        "Signika-SemiBold": require("../assets/fonts/Signika-SemiBold.ttf"),
        "Laila-Bold": require("../assets/fonts/Laila-Bold.ttf"),
        "Laila-Light": require("../assets/fonts/Laila-Light.ttf"),
        "Laila-Medium": require("../assets/fonts/Laila-Medium.ttf"),
        "Laila-Regular": require("../assets/fonts/Laila-Regular.ttf"),
        "Laila-SemiBold": require("../assets/fonts/Laila-SemiBold.ttf"),
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      




    return (
      <>
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}}/>
            <Stack.Screen name='indextwo' options={{headerShown:false}}/>
            <Stack.Screen name='genres' options={{headerShown:false}}/>
            <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
            <Stack.Screen name='(auth)' options={{headerShown:false}}/>
            <Stack.Screen name="login" options={{headerShown:false}}/>
            <Stack.Screen name="signup" options={{headerShown:false}}/>
            <Stack.Screen name="otp" options={{headerShown:false}}/>
        </Stack>
        <StatusBar backgroundColor="#C7D2FE" style="dark"/>
      </>
    )
}

export default MainLayout