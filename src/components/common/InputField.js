import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Colors } from "../../theme";
import { HP } from "../../utils";

const InputField = ({
  leftIcon,
  rightIcon,
  placeholder,
  multiline,
  numberOfLines = 1,
  text,
  setText,
  error,
  secureTextEntry,
  heading,
  headingStyle,
  isDisabled,
  style,
}) => {
  const left = leftIcon ? <TextInput.Icon name={leftIcon} color={Colors.primary} /> : null;
  const right = rightIcon ? <TextInput.Icon name={rightIcon} color={Colors.primary} /> : null;
  return (
    <>
      {heading && <Text style={headingStyle}>{heading}</Text>}
      <TextInput
        mode="flat"
        disabled={isDisabled}
        underlineColor={Colors.transparent}
        underlineColorAndroid={Colors.transparent}
        activeUnderlineColor={Colors.transparent}
        placeholderTextColor={Colors.placeholder}
        style={[styles.inputStyle, isDisabled && styles.disabled, style]}
        placeholder={placeholder}
        borderColor={Colors.primary}
        value={text}
        left={left}
        right={right}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={changed => setText(changed)}
      />
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    color: Colors.black2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    height: 47,
    marginVertical: 10
  },
  disabled: {
    borderBottomColor: Colors.placeholder,
    borderBottomWidth: 1,
  },
  errorStyle: {
    color: Colors.primary,
  },
});

export default InputField;
