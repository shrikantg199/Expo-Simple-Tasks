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
        name="Search"
        options={{
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#181818",
          tabBarIcon: () => (
            <View style={styles.searchIconContainer}>
              <AntDesign name="shoppingcart" size={28} color="white" />
            </View>
          ),
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
