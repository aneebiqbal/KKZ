import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "../containers/screens/HomeScreen";
import { ApplicationStyles, Colors } from "../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BooksScreen from "../containers/screens/BooksScreen";
import AutoTextScreen from "../containers/screens/AutoTextScreen";
import AddNewScreen from "../containers/screens/AddNewScreen";
import MyFilesScreen from "../containers/screens/MyFilesScreen";
import ProfileScreen from "../containers/screens/ProfileScreen";
import { Text } from "react-native";

const _BottomStack = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomStack = (props) => {
  return (
    <_BottomStack.Navigator
      initialRouteName="Add"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.secondary,
        tabBarStyle: [
          ApplicationStyles.shadow,
          {
            backgroundColor: Colors.white,
            height: '10%',
          },
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Books") {
            iconName = focused ? "reader-outline" : "reader-outline";
          } else if (route.name === "AutoText") {
            iconName = focused ? "text-outline" : "text-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-outline" : "add-outline";
          } else if (route.name === "My Files") {
            iconName = focused ? "folder-open-outline" : "folder-open-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarLabel: ({ focused, color }) => {
          // Set label text color
          let labelColor = focused ? Colors.black : Colors.black;
          return <Text style={{ color: labelColor, fontSize: 12, fontWeight:'500', marginBottom: 10 }}>{route.name}</Text>;
        },
      })}
    >
      <_BottomStack.Screen
        name="Books"
        component={BooksScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.replace("BottomStack", {
              screen: "BooksScreen",
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="AutoText"
        component={AutoTextScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate("BottomStack", {
              screen: "AutoText",
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="Add"
        component={AddNewScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate("BottomStack", {
              screen: "Add",
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="My Files"
        component={MyFilesScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate("BottomStack", {
              screen: "My Files",
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate("BottomStack", {
              screen: "Profile",
            });
          },
        }}
      />
    </_BottomStack.Navigator>
  );
};
export default BottomStack;
