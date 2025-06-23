import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/pages/Splashscreen/SplashScreen";
import SurahIndex from "./src/pages/SurahList/SurahIndex";
import SurahApp from "./src/pages/SurahList/SurahList";
import JuzIndex from "./src/pages/SurahList/JuzIndex";
import JuzDetail from "./src/pages/SurahList/JuzDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={SurahIndex} />
        <Stack.Screen name="JuzIndex" component={JuzIndex} />
        <Stack.Screen name="SurahList" component={SurahApp} />
        <Stack.Screen name="JuzDetail" component={JuzDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
