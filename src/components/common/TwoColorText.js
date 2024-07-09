import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'

const TwoColorText = ({heading, onPress, text}) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:"center"}}>
      <Text style={{fontWeight:"600", color:'#7D7D7D'}}>{heading}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{color:Colors.black, fontWeight:"600"}}>{text}</Text>
      </TouchableOpacity>
  </View>
  )
}

export default TwoColorText