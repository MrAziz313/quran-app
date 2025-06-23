import React, { useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./Splash.png")} // Ensure the path is correct
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012d46",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    textAlign: "center",
    width: width,
    height: height,
  },
});

export default SplashScreen;
