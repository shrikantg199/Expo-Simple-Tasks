import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" />
      </Stack>
      {loading && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
          }}
          onLayout={onLayoutRootView}
        >
          <LottieView
            source={require("../assets/images/Animation - 1729784202194.json")}
            autoPlay
            loop={false}
            style={{ width: 200, height: 200 }}
            onAnimationFinish={() => setIsLoading(false)}
          />
        </View>
      )}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
