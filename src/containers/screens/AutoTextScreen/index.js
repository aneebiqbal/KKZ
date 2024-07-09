import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { AutoTextCard, Categories, Header } from "../../../components/common";
import { cardsData, categories } from "../../../constants/dummyData";
import { useSelector } from "react-redux";

const AutoTextScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Wisdom");

  const filterData = cardsData.filter(
    (card) => card.category === selectedCategory
  );
  const { selectedLanguage, selectedAccent } = useSelector(
    ({ AccentReducer }) => AccentReducer
  );
  console.log("selected accent", selectedAccent);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header screen={"AutoText"} left divider magnifier />
      <View>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>

      <FlatList
        data={filterData}
        renderItem={({ item }) => (
          <AutoTextCard
            text={item.text}
            navigation={navigation}
            screen="AutoText"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default AutoTextScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    minWidth: 80,
    alignItems: "center",
    // borderColor: '#0C4D53',
    borderColor: "#CFCFCF",
    borderRadius: 6,
    height: 40,
  },
  text: {
    color: "#CFCFCF",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
  },
  selectedText: {
    color: "#0C4D53",
  },
});
