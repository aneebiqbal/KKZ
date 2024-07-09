import React, { useState } from "react";
import PropTypes from "prop-types";
import { Images, Fonts, Colors, ApplicationStyles } from "../../../../theme";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";

import {
  FullwidthButton,
  InputField,
  LineTextLine,
  SignInMethodsCard,
  TwoColorText,
} from "../../../../components/common";

import Strings from "../../../../constants/strings";
import { styles } from "../styles";
import { signUp } from "../../../../actions/AccountActions";
import { useDispatch, useSelector } from "react-redux";
import Status from "../../../../constants/status";
import { Formik } from "formik";
import { signInValidation } from "../SigninScreen/Validation";
import strings from "../../../../constants/strings";

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { status, user } = useSelector(({ AccountState }) => AccountState);

  const handleSubmitEvent = (values) => {
    setError("");
    dispatch(
      signUp(
        {
          username: values.username,
          email: values.email,
          password: values.password,
        },
        setError
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Images.background}
        style={[styles.image, { position: "absolute" }]}
      />
      <ImageBackground
        source={Images.background2}
        style={[styles.image2, { position: "absolute" }]}
      />

      <View
        style={{ alignItems: "center", marginTop: 10, flexDirection: "column" }}
      >
        <Text style={{ fontWeight: "600", fontSize: 30 }}>
          {strings.signupnow}
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 22,
            color: "#556062",
            marginTop: 10,
          }}
        >
          {strings.signupHeading}
        </Text>
      </View>

      <Formik
        validationSchema={signInValidation}
        validateOnChange={false}
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => {
          handleSubmitEvent(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View
              style={[styles.inputFieldContainer, ApplicationStyles.shadow]}
            >
              <InputField
                placeholder={Strings.fullname}
                text={values.username}
                setText={handleChange("username")}
                error={errors.username && errors.username}
              />
              <InputField
                placeholder={Strings.emailPlaceholder}
                text={values.email}
                setText={handleChange("email")}
                error={errors.email && errors.email}
              />
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

            <FullwidthButton
              labelStyle
              label={Strings.signup}
              onPress={handleSubmit}
              loading={status === Status.LOADING}
            />
          </>
        )}
      </Formik>

      <LineTextLine text={"Or Signup with"} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 30,
        }}
      >
        <SignInMethodsCard
          image={Images.google}
          onPress={() => navigation.navigate("HomeScreen")}
          widthImage={45}
        />
        <SignInMethodsCard image={Images.facebook} widthImage={40} />
        <SignInMethodsCard image={Images.apple} widthImage={33} />
      </View>
      <TwoColorText
        heading={"Already a member?"}
        text={" Login now"}
        onPress={() => navigation.navigate("SigninScreen")}
      />
    </SafeAreaView>
  );
};

SignUpScreen.propTypes = propTypes;
SignUpScreen.defaultProps = defaultProps;

export default SignUpScreen;
