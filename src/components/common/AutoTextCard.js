import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, Images } from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

const AutoTextCard = ({ text, navigation, }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('autoTextDetails', text)}>
      <Image source={Images.AutoText} style={styles.image} />
      <Text style={styles.text} numberOfLines={2}>
        {text}
      </Text>
      <TouchableOpacity>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.secondary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AutoTextCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 2,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  text: {
    width: "75%",
    // marginRight: ,
    fontSize: 14,
    fontWeight: "400",
  },
});
