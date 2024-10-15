import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCtK2msKVUafgCHJrXu-Ne1LD8o3aYFzKo";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  const handleSend = async () => {
    const userMessage = {
      id: Date.now().toString(),
      text: userInput,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    console.log(userMessage);
    setUserInput("");

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const result = await model.generateContent(userInput);

      const aiResponseText = result.response.text();
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      console.log(aiMessage);
    } catch (error) {
      console.error("Error generating AI response:", error);
    }
  };

  const renderMessageItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Input..."
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  messageList: {
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  userMessage: {
    backgroundColor: "#d1e7dd",
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  aiMessage: {
    backgroundColor: "#f8d7da",
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
