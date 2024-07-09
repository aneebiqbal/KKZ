import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Header } from "../../../components/common";

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header left screen="About us" logo divider />
      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
        🔊 Welcome to our text-to-speech app! 📢 We offer an extensive range of voices to suit diverse preferences and needs. 🌟 You'll find an array of high-quality voices, including various accents and languages. 🎯 Whether you need a professional-sounding voice for presentations, a soothing voice for relaxation, or a character voice for entertainment, our app has you covered. 🎭 We understand the importance of natural and expressive speech, and that's why we've carefully curated our selection to ensure a seamless user experience.
        </Text>
        <Text style={styles.paragraph}>
        🌈 With our ever-expanding library of voices, you'll always find the perfect match for your content. 🚀 We continuously work on improving and adding new voices to keep your experience fresh and enjoyable. 💡 Try our app today and discover the versatility and richness of our voice offerings! 🎉
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 23,
  },
  paragraph: {
    marginBottom: 16,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutUsScreen;
