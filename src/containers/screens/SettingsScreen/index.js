import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from '../../../components/common';
import Slider from 'react-native-slider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SettingsScreen = () => {
  const [volume, setVolume] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const resetVolume = () => {
    setVolume(0);
  }

  const resetSpeed = () => {
    setSpeed(0);
  }

  const resetPitch = () => {
    setPitch(0);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header left screen={'Settings'} divider />
      <Text style={styles.text}>Control Audio</Text>

      {/* Pitch  */}

      <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{fontWeight: '500', fontSize: 16}}>Pitch</Text>
          <View style={styles.volumeBox}>
            <Text style={styles.volumePercentage}>{Math.floor(pitch)}%</Text>
          </View>
        </View>

        <View style={styles.sliderContainer}>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={100}
          resetPitch={true}
          minimumTrackTintColor='#43CF99'
          maximumTrackTintColor='gray'
          thumbTintColor='#43CF99'
          trackStyle={{ height: 3 }}
          onValueChange={(value) => setPitch(value)}
        />
          <TouchableOpacity onPress={resetPitch}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Speed */}

      <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{fontWeight: '500', fontSize: 16}}>Speed</Text>
          <View style={styles.volumeBox}>
            <Text style={styles.volumePercentage}>{Math.floor(speed)}%</Text>
          </View>
        </View>

        <View style={styles.sliderContainer}>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor='#43CF99'
          maximumTrackTintColor='gray'
          thumbTintColor='#43CF99'
          trackStyle={{ height: 3 }}
          onValueChange={(value) => setSpeed(value)}
        />
          <TouchableOpacity onPress={resetSpeed}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Volume */}
      <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{fontWeight: '500', fontSize: 16}}>Volume</Text>
          <View style={styles.volumeBox}>
            <Text style={styles.volumePercentage}>{Math.floor(volume)}%</Text>
          </View>
        </View>

        <View style={styles.sliderContainer}>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor='#43CF99'
          maximumTrackTintColor='gray'
          thumbTintColor='#43CF99'
          trackStyle={{ height: 3 }}
          onValueChange={(value) => setVolume(value)}
        />
          <TouchableOpacity onPress={resetVolume}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text}>Playback Options</Text>
      <View style={styles.sectionContainer}>
        <BouncyCheckbox 
          style={{margin: 5}}
          size={20}
          fillColor='#43CF99'
          unfillColor='#FFFFFF'
          iconStyle={{borderColor: '#43CF99'}}
          textStyle={{textDecorationLine: 'none', color: '#000000'}}
          isChecked={selectedOption === 'start'}
          text='Play from start'
          onPress={() => setSelectedOption(selectedOption === 'start' ? '' : 'start')}
        />
        <BouncyCheckbox 
          style={{margin: 5}}
          size={20}
          fillColor='#43CF99'
          unfillColor='#FFFFFF'
          iconStyle={{borderColor: '#43CF99'}}
          textStyle={{textDecorationLine: 'none', color: '#000000'}}
          isChecked={selectedOption === 'cursor'}
          text='Play from current cursor'
          onPress={() => setSelectedOption(selectedOption === 'cursor' ? '' : 'cursor')}
        />
        </View>
    </SafeAreaView>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 12,
    color: '#979797',
    textTransform: 'uppercase',
    marginVertical: 7,
    marginLeft:20
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 2,
    padding: 15,
    borderRadius: 40,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  volumeBox: {
    backgroundColor: '#0C4D53',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  volumePercentage: {
    fontWeight: '500',
    fontSize: 12,
    color: 'white'
  },
  resetText: {
    marginLeft: 10,
    color: 'gray',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionText: {
    marginLeft: 20,
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCheckbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCheckbox: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
});

