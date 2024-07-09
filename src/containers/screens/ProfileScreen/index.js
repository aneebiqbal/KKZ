import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FullwidthButton, Header } from "../../../components/common";
import { Colors, Images } from "../../../theme";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import {logout} from '../../../actions/AccountActions';
import { useDispatch } from "react-redux";

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Header left divider screen={"Profile"} />
      <View style={styles.profileImageContainer}>
        <Image source={Images.user} />
      </View>
      {/* User Name */}
      <Text style={styles.userName}>Susan Johnes</Text>

      {/* Email */}
      <Text style={styles.email}>user.email@example.com</Text>

      <View style={styles.infoContainer}>

        {/* change password */}
        <View style={styles.infoItem}>
        <TouchableOpacity onPress={() => navigation.navigate("ChangePasswordScreen")}>
          <Text style={styles.infoText}>Change Password</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePasswordScreen")}>
            <Ionicons
              name="chevron-forward-outline"
              size={22}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* AboutUs */}
        <View style={styles.infoItem}>
          <TouchableOpacity onPress={() => navigation.navigate("AboutUsScreen")}>
            <Text style={styles.infoText}>About us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chevron-forward-outline"
              size={22}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Settings */}

        <View style={styles.infoItem}>
          <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
            <Text style={styles.infoText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chevron-forward-outline"
              size={22}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Voice */}
        <View style={styles.infoItem}>
          <TouchableOpacity onPress={() => navigation.navigate("SelectLanguageScreen")}>
            <Text style={styles.infoText}>Voice</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chevron-forward-outline"
              size={22}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Saved Audios */}
        <View style={styles.infoItem}>
          <TouchableOpacity onPress={() => navigation.navigate("MyFilesScreen")}>
            <Text style={styles.infoText}>Saved audios</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chevron-forward-outline"
              size={22}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => {
          dispatch(logout());
        }}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Fullwidth Button */}
      <View style={styles.fullWidthButtonContainer}>
        <FullwidthButton
          label={"Upgrade"}
          onPress={() => {
            navigation.navigate('UpgradeScreen')
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  email: {
    marginTop: 5,
    fontSize: 16,
    color: "gray",
    alignSelf: "center",
  },
  infoContainer: {
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
  },
  infoIcon: {
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: "transparent",
    paddingVertical: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    marginTop: 60
  },
  logoutButtonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  fullWidthButtonContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
