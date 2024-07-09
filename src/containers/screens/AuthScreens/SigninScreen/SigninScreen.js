import React, { useState } from "react";
import PropTypes from "prop-types";
import { Images, Fonts, Colors, ApplicationStyles } from "../../../../theme";
import { Image, View, Text, SafeAreaView, ImageBackground } from "react-native";

import {
  FullwidthButton,
  InputField,
  LineTextLine,
  SignInMethodsCard,
  TwoColorText,
} from "../../../../components/common";

import Strings from "../../../../constants/strings";
import { styles } from "../styles";
import { signIn } from "../../../../actions/AccountActions";
import { useDispatch, useSelector } from "react-redux";
import Status from "../../../../constants/status";
import { Formik } from "formik";
import { signInValidation } from "./Validation";
import strings from "../../../../constants/strings";
import { TouchableOpacity } from "react-native-gesture-handler";

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { status, user } = useSelector(({ AccountState }) => AccountState);

  const handleSubmitEvent = (values) => {
    setError("");
    dispatch(
      signIn(
        {
          username: values.username,
          password: values.password,
        },
        setError
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ alignItems: "center", marginTop: 10, flexDirection: "column" }}
      >
        <Text style={{ fontWeight: "600", fontSize: 30 }}>{strings.start}</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 20,
            color: "#556062",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          {strings.loginText}
        </Text>
      </View>

      <Formik
        validationSchema={signInValidation}
        validateOnChange={false}
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          handleSubmitEvent(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View
              style={[styles.inputFieldContainer, ApplicationStyles.shadow]}
            >
              <Text style={{margin: 5}}>Email</Text>
              <InputField
                placeholder={Strings.emailPlaceholder}
                text={values.username}
                setText={handleChange("username")}
                error={errors.username && errors.username}
              />
              <Text style={{margin: 5}}>Password</Text>
              <InputField
                placeholder={Strings.password}
                text={values.password}
                secureTextEntry
                setText={handleChange("password")}
                error={errors.password && errors.password}
              />
            </View>
            <View style={styles.errorStyleContainer}>
              <Text style={styles.errorStyle}>{error}</Text>
            </View>

            <View style={{ alignItems: "flex-end", marginRight: 22 }}>
              <TouchableOpacity>
                <Text
                  style={[
                    Fonts.weight3,
                    styles.forgotPassword,
                    { color: "#43CF99" },
                  ]}
                >
                  {strings.forgotPassword}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 10 }}>
              <FullwidthButton
                labelStyle
                label={Strings.login}
                onPress={handleSubmit}
                loading={status === Status.LOADING}
              />
            </View>
          </>
        )}
      </Formik>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>or</Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          margin: 30,
        }}
      >
        <SignInMethodsCard
          image={Images.google}
          onPress={() => navigation.navigate("HomeScreen")}
          widthImage={24}
        />
        <SignInMethodsCard image={Images.apple} widthImage={20} />
      </View>

      <View
        style={{ backgroundColor: "white", marginTop: 10, marginBottom: 20 }}
      >
        <TwoColorText
          heading={"Dont have an acount?"}
          text={" Sign up"}
          onPress={() => navigation.navigate("SignUpScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

SigninScreen.propTypes = propTypes;
SigninScreen.defaultProps = defaultProps;

export default SigninScreen;
