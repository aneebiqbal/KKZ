import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { Header, SavedFiles } from "../../../components/common";
import { useSelector } from "react-redux";

const MyFilesScreen = ({navigation}) => {
  const audioUrl = useSelector(({ SaveFilesState }) => SaveFilesState);
  const data = audioUrl.voices;

  const renderSavedFileItem = ({ item, index }) => {
    return <SavedFiles
      audioUrl={item}
      index={index}
      navigation={navigation}
      />
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
      <Header left screen={"My Files"} magnifier divider />
      {data.length < 0 ? (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "500", fontSize: 16 }}>
            No Files Available
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderSavedFileItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default MyFilesScreen;
