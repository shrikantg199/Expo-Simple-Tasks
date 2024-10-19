import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import Onboarding from "react-native-onboarding-swiper";

import { useRouter } from "expo-router";

const DoneButton = ({ ...props }) => (
  <TouchableOpacity style={styles.doneButton} {...props}>
    <Text style={styles.doneButtonText}>Let's Go!</Text>
  </TouchableOpacity>
);

const SkipButton = ({ ...props }) => (
  <TouchableOpacity style={{ marginLeft: 20 }} {...props}>
    <Text style={styles.skipButtonText}>Skip</Text>
  </TouchableOpacity>
);

const NextButton = ({ ...props }) => (
  <TouchableOpacity style={{ marginRight: 20 }} {...props}>
    <Text style={styles.nextButtonText}>Next</Text>
  </TouchableOpacity>
);

const Dots = ({ selected }) => {
  return (
    <View
      className={`w-2 h-2 mx-1 rounded-full ${
        selected ? "bg-[#4CAF50]" : "bg-[#C0C0C0]"
      }`}
    />
  );
};

const OnboardingSwiper = () => {
  const router = useRouter();
  const handleDone = () => {
    // console.log("Onboarding complete!");
    router.push("(tabs)");
  };

  return (
    <SafeAreaView className="flex-1">
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation - 1728566697069.json")}
                  className="w-60 h-64"
                />
              </View>
            ),
            title: "Welcome",
            subtitle: "Getting started with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "red",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation - 1728566697069.json")}
                  className="w-60 h-64"
                />
              </View>
            ),
            title: "Customization",
            subtitle: "Easily customizable components",
          },
          {
            backgroundColor: "green",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation - 1728566697069.json")}
                  className="w-60 h-64"
                />
              </View>
            ),
            title: "Get Started",
            subtitle: "Complete the onboarding and dive right in!",
          },
        ]}
        DoneButtonComponent={DoneButton}
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        DotComponent={Dots}
        onDone={handleDone}
        bottomBarHighlight={false}
      />
    </SafeAreaView>
  );
};

export default OnboardingSwiper;

const styles = StyleSheet.create({
  doneButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 20,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
  nextButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
});
