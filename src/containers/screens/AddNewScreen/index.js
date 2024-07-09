import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { FullwidthButton, Header } from "../../../components/common";
import { Colors, Images } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { clearVoiceUrl, generateVoice } from "../../../actions/GenerateVoiceAction";
import { saveVoiceUrl } from "../../../actions";

const AddNewScreen = ({ route, navigation }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const { selectedLanguage, selectedAccent } = useSelector(
    ({ AccentReducer }) => AccentReducer
  );
  const audioUrl = useSelector(({ GenerateVoiceState }) => GenerateVoiceState);
  const audio = audioUrl.audioUrl;
  const data = route.params;
  console.log(data);
  const dispatch = useDispatch();
  
  console.log(text);
  console.log("selected accent Add Screen", selectedAccent, selectedLanguage);
  const handleGenerate =  async () => {
    debugger;
    try {
      setLoading(true); // Show loading screen
      dispatch(clearVoiceUrl()); 
      await dispatch(generateVoice(text, selectedAccent));
      debugger;
      setLoading(false); // Hide loading screen
      navigation.navigate("GenerateTextToSpeech", {text} );
      dispatch(saveVoiceUrl(audio));
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading screen in case of an error
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          {/* Your logo here */}
          <Image
            resizeMode="contain"
            source={Images.logo}
            style={styles.logo}
          />
          {/* Loader component */}
          <ActivityIndicator size="large" color= {Colors.primary} />
        </View>
      ) : (
        <>
          <Header left autoText mp3 saveFile divider />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Paste your Text here</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput
                multiline
                placeholder="Your Text"
                scrollEnabled={true}
                value={text}
                selectionColor={Colors.secondary}
                onChangeText={setText}
                style={styles.textInput}
                placeholderTextColor={Colors.gray}
              />
            </ScrollView>
          </View>
          <View style={styles.generateButtonContainer}>
            <FullwidthButton
              label={"Generate"}
              onPress={handleGenerate}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default AddNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    padding: 20,
    height: "80%",
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary, // If you have a theme color for labels
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: Colors.black, // If you have a theme color for text
    // borderColor: Colors.gray, // If you have a theme color for borders
    // borderWidth: 0.3,
    // borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  generateButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
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
