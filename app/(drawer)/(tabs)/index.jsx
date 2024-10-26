import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";

const index = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const bottomSheetRef = useRef(null);

  // Snap points for the Bottom Sheet
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // Function to handle showing the Bottom Sheet
  const handlePresentBottomSheet = useCallback(() => {
    console.log("object")
    bottomSheetRef.current?.expand();
  }, []);
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
      <TouchableOpacity onPress={handlePresentBottomSheet}>
        <Text>Bottomsheet</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View className="p-4">
          <Text>This is a bottom sheet</Text>
        </View>
      </BottomSheet>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({});
