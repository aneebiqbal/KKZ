import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'
import { Colors } from '../../theme'

const LineTextLine = ({text}) => {
  return (
    <View style={styles.container}>
        <Divider style={styles.Divider} />
            <Text style={{color: Colors.lightBlack2}}>{text}</Text>
        <Divider style={styles.Divider} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:"center"
    },
    Divider: {
        width: 100,
        marginLeft: 15,
        marginRight: 15,
    }
})
export default LineTextLine