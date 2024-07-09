import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../../../components/common";
import MusicPlayer from "../../../components/common/MusicPlayer";

const GenerateTextToSpeech = ({ route }) => {
  const { text } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header left screen={"Generate Speech"} divider />
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ lineHeight: 30 }}>{text}</Text>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <MusicPlayer/>
      </View>
    </SafeAreaView>
  );
};

export default GenerateTextToSpeech;

const styles = StyleSheet.create({});
