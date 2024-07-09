import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors, Images } from "../../theme";

const SelectVoiceCard = ({
  voiceName,
  accent,
  selectedVoice,
  onSelectVoice,
  gender,
}) => {
  const isSelected =
    selectedVoice &&
    selectedVoice.voiceName === voiceName &&
    selectedVoice.accent === accent;

  const handleCardPress = () => {
    console.log("Setting selected voice:", { voiceName, accent });
    onSelectVoice({ voiceName, accent });
  };
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={handleCardPress}
    >
      {gender === "Male" ? (
        <Image
          source={Images.male} // Provide the correct image source for the voice
          style={styles.voiceImage}
        />
      ) : (
        <Image
          source={Images.female} // Provide the correct image source for the voice
          style={styles.voiceImage}
        />
      )}

      <View style={styles.voiceDetails}>
        <Text style={[styles.voiceName, isSelected && styles.boldText]}>
          {voiceName}
        </Text>
        <Text style={styles.accent}>{accent}</Text>
      </View>
      {isSelected && (
        <Image
          source={Images.activeVoice} // Provide the correct image source for the active voice
          style={styles.activeVoiceImage}
        />
      )}
    </TouchableOpacity>
  );
};

export default SelectVoiceCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 14,
    width: 325,
    height: 68,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    marginVertical: 10,
  },
  selectedContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  voiceInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  voiceDetails: {
    marginLeft: 10,
    flex: 1,
  },
  voiceName: {
    fontSize: 16,
    fontWeight: "500",
  },
  accent: {
    fontSize: 14,
    color: "#777777",
  },
  activeVoiceImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
