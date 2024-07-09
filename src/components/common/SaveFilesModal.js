import { Share, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ApplicationStyles } from '../../theme';

const SaveFilesModal = ({audioUrl, onClose}) => {

  const handleDownloadAudio = () => {
    console.log("Download audio");
    onClose(); // Close the modal after download
  };
  
  const handleShare = () => {
    debugger;
    const options = {
      url: audioUrl.url,
      fileName: audioUrl.fileName,
      time: audioUrl.time,
      date: audioUrl.date
    };
  
    Share.share(options)
      .then((result) => {
        debugger;
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // Shared with activity type of result.activityType
          } else {
            // Shared
          }
        } else if (result.action === Share.dismissedAction) {
          // Dismissed
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <View style={[styles.modal, ApplicationStyles.shadow]}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.modalButton} onPress={handleDownloadAudio}>
          <Text>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={handleShare}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SaveFilesModal

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: -10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    // elevation: 15,
    // zIndex: 100,
    flex: 1
  },
  modalContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalButton: {
    paddingVertical: 8,
  },
});
