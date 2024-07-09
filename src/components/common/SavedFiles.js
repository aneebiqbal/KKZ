import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ApplicationStyles, Colors, Images } from "../../theme";
import { TouchableWithoutFeedback } from "react-native";
import { SavedFilesModal } from ".";

const SavedFiles = ({audioUrl,index, onPress, navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeFileIndex, setActiveFileIndex] = useState(null);

  const handleModalToggle = (index) => {
    if (isModalVisible) {
      // Modal is closing, reset activeFileIndex to null
      setActiveFileIndex(null);
    } else {
      // Modal is opening, set activeFileIndex
      setActiveFileIndex(index);
    }
    setModalVisible(!isModalVisible);
  };



  //   Share.share(options)
  //     .then((result) => {
  //       if (result.action === Share.sharedAction) {
  //         if (result.activityType) {
  //           // Shared with activity type of result.activityType
  //         } else {
  //           // Shared
  //         }
  //       } else if (result.action === Share.dismissedAction) {
  //         // Dismissed
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const handleOutsideModalClick = () => {
    if (!isModalVisible) {
      setModalVisible(false);
    }
  };

  return (
    <TouchableOpacity style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={Images.mp3} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.fileName}>{audioUrl.fileName}</Text>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKb}>2KB</Text>
            <Text style={styles.dot}> . </Text>
            <Text style={styles.detaildate}>{audioUrl.date}</Text>
            <Text style={styles.dot}> . </Text>
            <Text style={styles.detaildate}>{audioUrl.time}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.dotsContainer,
            activeFileIndex === index ?  styles.activeDotsContainer : null,
          ]}
          onPress={() => handleModalToggle(index)}
        >
          <Text>:</Text>
        </TouchableOpacity>
        {isModalVisible && (
           <SavedFilesModal audioUrl={audioUrl} onClose={handleModalToggle}/>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    // zIndex: 1,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  fileName: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    marginRight: 5,
  },
  detaildate: {
    color: "#979797",
    fontWeight: "500",
    fontSize: 12,
  },
  dot: {
    color: "#979797",
  },
  detailKb: {
    color: "#43CF99",
    fontWeight: "600",
    fontSize: 12,
  },
  dotsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    zIndex: 100
  },
  activeDotsContainer: {
    backgroundColor: Colors.primary,
  },
  modal: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  modalButton: {
    paddingVertical: 8,
  },
});

export default SavedFiles;
