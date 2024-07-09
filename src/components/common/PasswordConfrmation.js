import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'
import { Colors, Fonts, Images } from '../../theme'
import FullwidthButton from './FullwidthButton'

const PassowrdConfermationModal = ({
    heading,
    image,
    text,
    button
}) => {
  return (
    <View style={styles.container}
      >
        <View>
            <Text style={[Fonts.medium, Fonts.bold, styles.headingText]}>
                {heading}                
            </Text>
            
            <Divider/>
            <View style={styles.imageHeadStyle}>
                <Image
                    source={image}
                    width={45}
                    height={45}
                    style={styles.imageStyle}
                />
                <Text style={[Fonts.small, styles.textStyle]}>
                    {text}
                </Text>
                {button}
            </View>
            
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        margin: 100
    },
    headingText: {
        textAlign:'center',
        padding:16
    },
    imageHeadStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        margin: 40,
    },
    textStyle: {
        paddingBottom: 32,
        textAlign: 'center'
    },
  });

export default PassowrdConfermationModal