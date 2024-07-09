import { TouchableOpacity, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryContainer,
            selectedCategory === category && styles.selectedCategory,
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === category && styles.selectedText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    minWidth: 80,
    alignItems: "center",
    borderColor: "#CFCFCF",
    borderRadius: 6,
    height: 40,
  },
  selectedCategory: {
    borderColor: "#0C4D53",
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
