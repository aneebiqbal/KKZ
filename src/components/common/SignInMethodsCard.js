import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../theme'

const SignInMethodsCard = ({image, onPress, widthImage }) => {
  const backgroundColor = image === Images.apple ? Colors.white : "#F1F6FB";
  const borderColor = image === Images.apple ? Colors.lightGra : Colors.transparent;
  const borderWidth = image === Images.apple ? 1 : 0;
  return (
    <TouchableOpacity style={{
      paddingHorizontal: 50,
      marginVertical: 5,
        backgroundColor: backgroundColor,
        height: 55,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        borderWidth: borderWidth,
        borderColor: borderColor,
    }} 
    onPress={onPress}>
      <Image
        source={image}
        style={{
          position: 'absolute',
          width: widthImage,
          height: 24,
          top: 15,
          left: 15,
          right: 0,
          bottom: 0
        }}
      />
      <Text style={{ color: '#3E3E3E', fontSize: 14, fontWeight: '500' }}>
        {image === Images.apple ? 'Continue with Apple ID' : 'Continue with Google'}
      </Text>
    </TouchableOpacity>
  )
}

export default SignInMethodsCard