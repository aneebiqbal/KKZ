import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Colors, Fonts, Images } from "../../theme";
import { HP, WP } from "../../utils/responsive";
import BackIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

const propTypes = {};

const defaultProps = {};

const Header = (props) => {
  // console.log('data props -- ', props);
  const navigation = useNavigation();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setSearchQuery("");
    console.log(searchQuery);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          {props.left ? (
            <>
              <BackIcon
                name="left"
                color={Colors.secondary}
                size={22}
                onPress={() =>
                  props.onBack ? props.onBack() : navigation.goBack()
                }
              />
              {isSearchVisible ? <TextInput
                  style={styles.searchInput}
                  placeholder="Search the file name"
                  placeholderTextColor={'#979797'}
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
                /> : (
                <Text style={styles.screenName}>{props.screen}</Text>
              )}
            </>
          ) : props.drawerLeft ? (
            <TouchableOpacity>
              <Ionicons
                name="menu-outline"
                color={Colors.black}
                size={28}
                onPress={props.onPressLeft}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        {props.welcome ? (
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>{props.welcome}</Text>
          </View>
        ) : null}

        <View style={styles.rightIcon}>
          {props.logo ? (
            <Image
              source={Images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          ) : null}
          {props.cross ? (
            <>
              <TouchableOpacity onPress={props.onCross}>
                <Ionicons name="close-outline" color={Colors.black} size={22} />
              </TouchableOpacity>
            </>
          ) : null}
          {props.magnifier ? (
            <>
              <TouchableOpacity onPress={handleSearch}>
                <Ionicons
                  name="search-outline"
                  color={Colors.black}
                  size={22}
                />
              </TouchableOpacity>
            </>
          ) : null}
          {props.autoText ? (
            <>
              <TouchableOpacity>
                <Ionicons
                  name="document-outline"
                  color={Colors.black}
                  size={22}
                />
              </TouchableOpacity>
              <View style={styles.iconSpace} />
            </>
          ) : null}
          {props.mp3 ? (
            <>
              <TouchableOpacity>
                <Ionicons name="mp3-outline" color={Colors.black} size={22} />
              </TouchableOpacity>
              <View style={styles.iconSpace} />
            </>
          ) : null}
          {props.saveFile ? (
            <>
              <TouchableOpacity>
                <Ionicons name="save-outline" color={Colors.black} size={22} />
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </View>

      {props.divider && <Divider style={styles.dividerMargin} />}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: HP("5"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftSection: {
    paddingLeft: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeSection: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenName: {
    marginLeft: 8,
    color: Colors.black,
    fontSize: 16,
    fontWeight: "500",
  },
  welcomeText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  rightIcon: {
    flex: 1, // Allow the logo to take up the remaining space
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Adjust the alignment as needed
    marginRight: 10,
  },
  logo: {
    height: 70, // Adjust the height of the logo image
    width: 85, // Adjust the width of the logo image
  },
  dividerMargin: {
    marginVertical: 12,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 0.25,
    borderColor: "#000000",
    opacity: 0.1,
  },
  iconSpace: {
    width: 15,
  },
  searchInput: {
    marginLeft: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    // borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 4,
    width: 200, // Adjust the width as needed
  },
});

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
