import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Sound from "react-native-sound";

import { Images } from "../../theme";
import { useSelector } from "react-redux";
// import { formatDuration } from "date-fns";

const MusicPlayer = () => {
  const audioUrl = useSelector(({ GenerateVoiceState }) => GenerateVoiceState);
  const audio = audioUrl.audioUrl;
  debugger;
  const soundRef = useRef(null);

  const [isPlaying, setPlaying] = useState(false);
  const [currentDuration, setDuration] = useState("0:00");
  const [totalDuration, setTotalDuration] = useState("0:00");
  const [progress, setProgress] = useState(0);

  let sound = null;

  const handlePlayPause = () => {
    debugger;
    if (soundRef.current) {
      if (isPlaying) {
        debugger;
        // Pause the audio if it's currently playing
        soundRef.current.pause();
      } else {
        // Start playing the audio if it's currently paused
        soundRef.current.play((success) => {
          if (success) {
            console.log('Playback finished successfully');
          } else {
            console.log('Playback failed due to audio decoding errors');
          }
          setPlaying(false);
        });
      }
      // Update the state to reflect the current playing status
      setPlaying(!isPlaying);
    }
  };

  const handleBackward = () => {
    debugger;
    if (sound) {
      sound.getCurrentTime((seconds) => {
        const currentPosition = seconds - 10; // Go back 10 seconds
        sound.setCurrentTime(currentPosition);
        setDuration(formatDuration(currentPosition));
      });
    }
  };

  const handleForward = () => {
    debugger;
    if (sound) {
      sound.getCurrentTime((seconds) => {
        const currentPosition = seconds + 10; // Go forward 10 seconds
        sound.setCurrentTime(currentPosition);
        setDuration(formatDuration(currentPosition));
      });
    }
  };

  const formatDuration = (durationInSeconds) => {
    debugger;
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    debugger;
    // Clean up the sound when the component unmounts
    return () => {
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, []);

  useEffect(() => {
    if (audio) {
      soundRef.current = new Sound(audio, '', (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
        }
      });
    }
    return () => {
      // Release the sound when the component unmounts
      if (soundRef.current) {
        soundRef.current.release();
      }
    };
  }, [audio]);

  return (
    <View style={styles.container}>
      {/* Song Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>

      {/* Duration Text */}
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{currentDuration}</Text>
        <Text style={styles.durationText}>{totalDuration}</Text>
      </View>

      {/* Row with Image, Icons, and Speed Text */}
      <View style={styles.rowContainer}>
        {/* Image on the left side */}
        <TouchableOpacity
          onPress={handlePlayPause}
          style={styles.imageContainer}
        >
          <Image
            source={Images.man2}
            style={styles.accentImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Controls */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={handleBackward} style={styles.controlIcon}>
            <Ionicons name="play-back" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePlayPause}
            style={styles.controlIcon}
          >
            <AntDesign
              name={isPlaying ? "pausecircle" : "play"}
              size={48}
              color="#0C4D53"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForward} style={styles.controlIcon}>
            <AntDesign name="forward" size={24} />
          </TouchableOpacity>
        </View>

        {/* Speed Text */}
        <View style={styles.speedContainer}>
          <Text style={styles.speedText}>1x</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: "#EAEAEA",
  },
  accentImage: {
    width: 38,
    height: 38,
  },
  progressContainer: {
    width: "120%",
    height: 3,
    backgroundColor: "#E6E6E6",
    position: "absolute",
    top: 0,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#43CF99",
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // marginTop: 10,
  },
  durationText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#888",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  imageContainer: {
    // marginHorizontal: 5,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  controlIcon: {
    marginHorizontal: 20,
  },
  speedContainer: {
    marginHorizontal: 10,
  },
  speedText: {
    fontSize: 16,
    fontWeight: "bold",
    fontWeight: "500",
  },
});

export default MusicPlayer;
