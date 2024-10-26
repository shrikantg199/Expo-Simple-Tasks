import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet, View } from "react-native";
import { Tabs, useNavigation } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TabStructure = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
          tabBarActiveTintColor: "#A078E0",
        }}
      />
      <Tabs.Screen
        name="ChatAI"
        options={{
          tabBarLabel: "ChatAI",
          tabBarActiveTintColor: "#181818",
        }}
      />
      <Tabs.Screen
        name="ImageAnalyser"
        options={{
          tabBarLabel: "Image Analyser",
          tabBarActiveTintColor: "#181818",
        }}
      />
  
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIconContainer: {
    backgroundColor: "#f83758",
    padding: 1,
    width: 44,
    height: 44,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -2,
  },
});

export default TabStructure;
