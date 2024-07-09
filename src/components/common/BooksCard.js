import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { Colors, Images } from "../../theme";

const BooksCard = ({ bookName, author, navigation, bookContent }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("autoTextDetails", { bookContent })}
    >
      <Image source={Images.Books} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.bookName} numberOfLines={3}>
          {bookName}
        </Text>
        <Text style={styles.author} numberOfLines={3}>
        Author: {author}
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.secondary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 2,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 25,
  },
  bookName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    fontWeight: '300',
  },
});
