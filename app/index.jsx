import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 border-2 border-red-300 justify-center items-center">
      <Text className="text-3xl font-llight text-primary-100">FlexFury</Text>
      <StatusBar style="auto" />
    </View>
  );
}
