import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const index = () => {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white h-screen"
    >
      <View className="flex flex-row justify-between items-center mx-4 mt-14 ">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-red-500 text-xl">Features</Text>
        <MaterialCommunityIcons
          name="account-cowboy-hat-outline"
          size={28}
          color="green"
        />
      </View>
      <View className="w-72  mx-10 my-3 justify-center  ">
        {/* Search bar */}
        <TextInput
          placeholder="Search....."
          className="px-2 py-2 shadow-xl shadow-black bg-white rounded-full"
        />
      </View>
      <TouchableOpacity onPress={() => router.push("/onboarding")}>
        <Text>onboarding</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({});
