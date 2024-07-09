import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FullwidthButton, Header } from "../../../components/common";
import { Images } from "../../../theme";

const UpgradeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header left screen={"Upgrade"} divider />
      <View style={styles.container}>
        <Image source={Images.logo} />
        <Text style={styles.upgradeText}>Upgrade to Premium</Text>

        <View style={styles.box}>
          <Text style={styles.headingText}>Heading 1</Text>
          <Text style={styles.lineText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>

          <Text style={styles.headingText}>Heading 2</Text>
          <Text style={styles.lineText}>
            Duis aute irure dolor in reprehenderit in voluptate veli.
          </Text>

          <Text style={styles.headingText}>Heading 3</Text>
          <Text style={styles.lineText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </Text>

          <Text style={styles.headingText}>Heading 4</Text>
          <Text style={styles.lineText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </Text>

          <Text style={styles.headingText}>Heading 5</Text>
          <Text style={styles.lineText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </Text>
        </View>
      </View>
      <FullwidthButton label={"Start"} onPress={{}} />
    </SafeAreaView>
  );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  upgradeText: {
    fontWeight: "500",
    fontSize: 22,
    top: 10,
  },
  box: {
    backgroundColor: "#F5F5F5",
    padding: 30,
    borderRadius: 8,
    top: 10,
    margin: 10
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lineText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
