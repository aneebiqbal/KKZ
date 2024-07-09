import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  FullwidthButton,
  Header,
  SelectLanguageDropdown,
  SelectVoiceCard,
} from "../../../components/common";
import { Divider } from "react-native-paper";
import { fetchLanguages, fetchVoices, setSelectedAccent, setSelectedLanguage } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

const SelectLanguage = ({ navigation }) => {
  const voicesData = useSelector(({ FetchVoiceState }) => FetchVoiceState);
  const languagesData = useSelector(
    ({ FetchLanguagesState }) => FetchLanguagesState
  ); 
  const {selectedLanguage,selectedAccent} = useSelector(
    ({ AccentReducer }) => AccentReducer
  );
  const dispatch = useDispatch();

  // const [selectedLang, setSelectedLang] = useState('English (United States)');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingVoices, setLoadingVoices] = useState(false);
  // const [loadingLanguages, setLoadingLanguages] = useState(false);

  const handleLanguageSelect = () => {
    dispatch(setSelectedLanguage(selectedVoice.accent))
  };

  const handleButtonPress = async () => {
    // console.log(selectedLanguage, selectedVoice);
    dispatch(setSelectedAccent(selectedVoice.voiceName));
    navigation.navigate("BottomStack");
  };

  useEffect(() => {
    if (isLoading) {
      // Show loader while fetching voices
      setLoadingVoices(true);
      // setLoadingLanguages(true);
      dispatch(fetchVoices())
        .then(() => {
          debugger;
          setLoadingVoices(false); // Hide loader when API call is successful
          // setLoadingLanguages(false);
        })
        .catch(() => {
          // setLoadingVoices(false);
          setIsLoading(false);
        });
    }
    // dispatch(fetchLanguages())
    //   .then(() => {
    //     debugger;
    //     setLoadingLanguages(false);
    //   })
    //   .catch(() => {
    //     setLoadingLanguages(false);
    //   });
  }, [isLoading,  dispatch]);
  // selectedLanguage, // this is used in center of the above 

  const languages = languagesData?.languageData || [];
  const voices = voicesData?.voiceData || [];
  return (
    <SafeAreaView style={styles.container}>
      <Header
        welcome="Welcome to inovaqo"
        cross
        divider
        onCross={() =>
          navigation.navigate("BottomStack", {
            selectedLanguage: null,
            selectedAccent: null,
          })
        }
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Choose your favorite voice</Text>

        <View style={styles.dropdownContainer}>
          <SelectLanguageDropdown
            onLanguageSelect={handleLanguageSelect}
            languages={languages}
            selectedLanguage={selectedLanguage}
          />
        </View>

        {loadingVoices ? ( // Show loader while fetching voices
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        ) : (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.voiceCardsContainer}>
              {voices.length > 0 ? (
                voices.map((voice, index) => (
                  <SelectVoiceCard
                    key={index}
                    voiceName={voice.voice_code}
                    accent={voice.language_name}
                    selectedVoice={selectedVoice}
                    onSelectVoice={setSelectedVoice}
                    gender={voice.voice_gender}
                  />
                ))
              ) : (
                <Text>No voices available.</Text>
              )}
            </View>
          </ScrollView>
        )}
      </View>
      <Divider />
      <View style={styles.buttonContainer}>
        <FullwidthButton onPress={handleButtonPress} label={"Next"} />
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dropdownContainer: {
    marginBottom: 75,
    zIndex: 9999,
  },
  voiceCardsScrollView: {
    flex: 1,
  },
  voiceCardsContainer: {
    alignItems: "center",
  },
  title: {
    color: "#282828",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 5,
  },
});

export default SelectLanguage;
