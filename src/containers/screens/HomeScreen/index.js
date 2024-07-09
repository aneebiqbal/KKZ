import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  ActivityIndicator,
  TextInput,
  Button,
  Text,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullwidthButton, Header } from "../../../components/common";
import { Images } from "../../../theme";
import useFetch from "../../../actions/useFetch";
import Status from "../../../constants/status";

// import Sound from "react-native-sound";
const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const HomeScreen = ({ navigation, route }) => {
  const selectedLanguage = route.params?.selectedLanguage;
  const selectedAccent = route.params?.selectedAccent?.voiceName;
  
  console.log(selectedAccent, selectedLanguage);

  const [isLoading, setIsLoading] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [audioURI, setAudioURI] = useState("");
  console.log(audioURI);
  console.log(textInput);

  const { fetchData } = useFetch();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData(textInput);
      setAudioURI(data.audioStream);
      console.log(" this is the audiostream", data);
      // Handle the data or update state as needed
    } catch (error) {
      alert("There was an error");
      // Handle the error condition
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.background3} style={styles.image} />
      <Header
        user
        navigate={navigation}
        divider
        magnifier
        onPressLeft={() => navigation.openDrawer()}
      />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
