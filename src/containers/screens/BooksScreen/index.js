import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BooksCard, Categories, Header } from "../../../components/common";
// import LottieView from 'lottie-react-native';

const BooksScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [books, setBooks] = useState([]);
  const filterData = books.filter(books => books.category === selectedCategory)
  const categories = [
    "General",
    "Sports",
    "Entertainment",
    "Technology",
    "Health",
    "Business",
  ];

  useEffect(() => {
    // Fetch or retrieve the book data from your data source
    // Example: Fetch books from an API
    fetchBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchBooks = () => {
    // Simulated fetch request to retrieve books
    return new Promise((resolve, reject) => {
      // Simulated book data
      const booksData = [
        {
          id: "1",
          bookName: "Book 1",
          author: "Author 1",
          bookContent: "Book 1 Content",
          category: 'Entertainment'
        },
        {
          id: "2",
          bookName: "Book 2",
          author: "Author 2",
          bookContent: "Book 2 Content",
          category: 'General'
        },
        {
          id: "3",
          bookName: "Book 3",
          author: "Author 3",
          bookContent: "Book 3 Content",
          category: 'Sports'
        },
        {
          id: "4",
          bookName: "Book 4",
          author: "Author 4",
          bookContent: "Book 4 Content",
          category: 'Health'
        },
        {
          id: "5",
          bookName: "Book 5",
          author: "Author 5",
          bookContent: "Book 5 Content",
          category: 'Health'
        },
        // Add more book objects as needed
      ];

      setTimeout(() => {
        resolve(booksData);
      }, 1000);
    });
  };

  const renderItem = ({ item }) => {
    return (
      <BooksCard
        bookName={item.bookName}
        author={item.author}
        bookContent={item.bookContent}
      />
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Header screen={"Books"} left magnifier divider />
      {/* <View>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
      <View style={{alignItems:"center"}}>
      {/* <LottieView
                source={require("../../../assets/soon.json")}
                autoPlay
                loop
                speed={2}
                style={{ width: 300, height: 300 }}
                
              /> */}
      </View>
      <View style={{alignItems:"center", flexDirection:"column", top: '5%'}}>
        <View style={styles.container}>
          <Text style={styles.text}>Coming Soon</Text>
        </View>
      </View>
     
    </SafeAreaView>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 70,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
