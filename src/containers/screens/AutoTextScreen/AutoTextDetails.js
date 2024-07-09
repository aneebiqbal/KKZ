import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { FullwidthButton, Header } from "../../../components/common";
import { ApplicationStyles, Colors, Images } from "../../../theme";
import MusicPlayer from "../../../components/common/MusicPlayer";
import { useSelector, useDispatch } from "react-redux";
import { generateVoice } from "../../../actions/GenerateVoiceAction";
import { saveVoiceUrl } from "../../../actions";

const AutoTextDetails = ({ route }) => {
  const [loading, setLoading] = useState(false);

  const text = route.params
  const { selectedLanguage, selectedAccent } = useSelector(
    ({ AccentReducer }) => AccentReducer
  );
  const audioUrl = useSelector(
    ({ GenerateVoiceState }) => GenerateVoiceState
  );
  const audio = audioUrl.audioUrl;
  console.log("selected accent", selectedAccent,selectedLanguage );
  console.log(audioUrl)
  const dispatch = useDispatch();
  const handleGenerate =  async () => {
    try {
      setLoading(true); // Show loading screen
      await dispatch(generateVoice(text, selectedAccent));
      setLoading(false); // Hide loading screen
      dispatch(saveVoiceUrl(audio));
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading screen in case of an error
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? ( // Conditional rendering based on the loading state
        <View style={styles.loadingContainer}>
          {/* Your logo here */}
          <Image resizeMode="contain" source={Images.logo} style={styles.logo} />
          {/* Loader component */}
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <>
      <Header left divider mp3 autoText saveFile />
      <View style={styles.contentContainer}>
        <Image source={Images.Quote} style={styles.quotationMarks} />
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{text}</Text>
        </View>
        <View style={{flex: 1, justifyContent:"flex-end"}}>
        <FullwidthButton
          label={'Generate'}
          onPress={handleGenerate}
        />
        </View>
        
      </View>
      {audio ? (
        <View style={[styles.musicPlayerContainer, ApplicationStyles.shadow]}>
        <MusicPlayer audioUrl={audio}/>
      </View>
      ): null}
      
      </>
      )}
    </SafeAreaView>
  );
};

export default AutoTextDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flexGrow: 1, // Added flexGrow to enable ScrollView to fill the available space
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 100, // Added paddingBottom to create space for the MusicPlayer
  },
  quotationMarks: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 5,
    left: 20,
  },
  quoteContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    padding: 44,
    marginTop: 30,
    marginHorizontal: 5,
    position: 'relative'
  },
  quoteText: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "stretch",
    lineHeight: 29,
  },
  musicPlayerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});
