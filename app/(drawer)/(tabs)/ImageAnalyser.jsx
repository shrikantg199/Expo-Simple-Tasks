import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCtK2msKVUafgCHJrXu-Ne1LD8o3aYFzKo";
// Initialize Gemini AI with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

const ImageAnalyser = () => {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Enable base64 encoding
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        analyzeImage(result.assets[0].base64);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const analyzeImage = async (base64Image) => {
    try {
      setLoading(true);
      setAnalysis("");

      // Initialize the Gemini Pro Vision model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const imageData = {
        inlineData: {
          data: base64Image,
          mimeType: "image/jpeg",
        },
      };

      // Generate content with the image
      const result = await model.generateContent([
        "Analyze this image and describe what you see in detail",
        imageData,
      ]);

      const response = await result.response;
      setAnalysis(response.text());
    } catch (error) {
      console.error("Error analyzing image:", error);
      setAnalysis("Error analyzing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image " onPress={pickImage} />

      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      )}

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Analyzing image...</Text>
        </View>
      )}

      {analysis && (
        <ScrollView className="h-full">
          <Text style={styles.analysisTitle}>Analysis Result:</Text>
          <View>
            <Text style={styles.analysisText}>{analysis}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  imageContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 300,
    height: 225,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  analysisContainer: {
    marginTop: 28,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 80,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  analysisText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ImageAnalyser;
