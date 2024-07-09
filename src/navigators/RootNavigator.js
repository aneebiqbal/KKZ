import * as React from "react";
import { StatusBar } from "react-native";
import { ApplicationStyles } from "../theme";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SigninScreen from "../containers/screens/AuthScreens/SigninScreen/SigninScreen";
import SignUpScreen from "../containers/screens/AuthScreens/SignUpScreen/index";
import HomeScreen from "../containers/screens/HomeScreen";
import BottomStack from "./BottomStack";
import DrawerScreen from '../containers/screens/DrawerScreen/DrawerScreen';

import { connect } from "react-redux";
import SelectLanguage from "../containers/screens/SelectLanguage";
import BooksScreen from "../containers/screens/BooksScreen";
import AutoTextScreen from "../containers/screens/AutoTextScreen";
import AddNewScreen from "../containers/screens/AddNewScreen";
import MyFilesScreen from "../containers/screens/MyFilesScreen";
import ProfileScreen from "../containers/screens/ProfileScreen";
import ChangePasswordScreen from "../containers/screens/ChangePasswordScreen";
import AboutUsScreen from "../containers/screens/AboutUsScreen";
import SettingsScreen from "../containers/screens/SettingsScreen";
import VoiceScreen from "../containers/screens/VoiceScreen";
import SavedAudiosScreen from "../containers/screens/SavedAudiosScreen";
import autoTextDetails from "../containers/screens/AutoTextScreen/AutoTextDetails";
import OnboardingScreen from "../containers/screens/OnboardingScreen";
import GenerateTextToSpeech from "../containers/screens/AddNewScreen/GenerateTextToSpeech";
import UpgradeScreen from "../containers/screens/UpgradeScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const InitStack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="SelectLanguageScreen"
    headerMode={"Screen"}
    screenOptions={{
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "blue",
      },
      headerBackTitleVisible: false,
    }}
  >
  <Drawer.Screen
    name="BottomStack"
    component={BottomStack}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="SelectLanguageScreen"
    component={SelectLanguage}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="BooksScreen"
    component={BooksScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="AutoTextScreen"
    component={AutoTextScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="AddScreen"
    component={AddNewScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="GenerateTextToSpeech"
    component={GenerateTextToSpeech}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="MyFilesScreen"
    component={MyFilesScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="ProfileScreen"
    component={ProfileScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="ChangePasswordScreen"
    component={ChangePasswordScreen}
    options={{ headerShown: false }}
  />
   <Drawer.Screen
    name="AboutUsScreen"
    component={AboutUsScreen}
    options={{ headerShown: false }}
  />
   <Drawer.Screen
    name="SettingsScreen"
    component={SettingsScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="VoiceScreen"
    component={VoiceScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="SavedAudiosScreen"
    component={SavedAudiosScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="autoTextDetails"
    component={autoTextDetails}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="UpgradeScreen"
    component={UpgradeScreen}
    options={{ headerShown: false }}
  />
  <Drawer.Screen
    name="HomeScreen"
    component={HomeScreen}
    options={{ headerShown: false }}
  />
  </Stack.Navigator>
);

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      headerMode={"screen"}
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "blue",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


// const DrawerNavigator = () => (
//   <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>
//     <Drawer.Screen
//       name="drawer"
//       component={AppStack}
//       options={{headerShown: false}}
//     />

//   </Drawer.Navigator>
// );

const AppNav = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen name="modal" component={AppStack} />
    </Stack.Navigator>
  );
};

// const InitialStack = () => (
//   <InitStack.Navigator initialRouteName="SelectLanguageScreen" headerMode="none">
//     <InitStack.Screen
//       name="SelectLanguageScreen"
//       component={SelectLanguage}
//       options={{ headerShown: false }}
//     />
//     <InitStack.Screen
//       name="BottomStack"
//       component={BottomStack}
//       options={{ headerShown: false }}
//     />
//   </InitStack.Navigator>
// );


const RootNavigator = ({ loggedIn }) => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={ApplicationStyles.appbar.barStyle}
        backgroundColor={ApplicationStyles.appbar.statusBarColor}
      />
      <NavigationContainer>
      {/* <AuthStack />  */}
      <AppNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = ({ AccountState }) => {
  return {
    loggedIn: AccountState.loggedIn,
  };
};

export default connect(mapStateToProps, null)(RootNavigator);
