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
      style={{ flex: 1 }}
    >
      <View className="flex flex-row justify-between items-center mx-4 mt-14">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-red-500">hello2</Text>
        <Text className="text-red-500">profile</Text>
      </View>
      <View className="bg-white w-72 py-2 mx-10 my-3 justify-center rounded-full ">
        {/* Search bar */}
        <TextInput placeholder="Search....." className="px-2" />
      </View>
      <TouchableOpacity onPress={() => router.push("/onboarding")}>
        <Text>Cart</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({});
