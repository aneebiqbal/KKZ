import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ApplicationStyles, Colors } from "../../theme";

const PropTypes = {};
const defaultProps = {};

const ShadowCard = ({
  heading,
  image,
  style,
  onPress,
  children,
  image2,
  heading2,
}) => {
  return (
    <View
      onPress={onPress}
      style={[styles.container, ApplicationStyles.shadow, style]}
    >
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <Text style={{ fontWeight: "500", fontSize: 14 }}>{heading}</Text>
        <Text style={{ fontWeight: "500", fontSize: 14 }}>{heading2}</Text>
        <TouchableOpacity onPress={onPress}>
          <Image source={image} style={styles.imgStyle} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image source={image2} style={styles.imgStyle2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 20,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: 35,
    width: 35,
    marginBottom: 20,
    marginTop: 20,
  },
  imgStyle2: {
    height: 100,
    width: 150,
    left: 100,
    top: 20,
    backgroundColor: "blue",
    position: "absolute",
  },
  textStyle: {
    color: Colors.black,
    marginLeft: 2,
  },
});

ShadowCard.propTypes = PropTypes;
ShadowCard.defaultProps = defaultProps;

export default ShadowCard;