import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, SavedFiles } from '../../../components/common'

const SavedAudiosScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <Header
          left
          screen={'Saved Audios'}
          divider
        />

        {/* <View style={{zIndex: -10}}> */}
          <SavedFiles/>
        {/* </View> */}
    </SafeAreaView>
  )
}

export default SavedAudiosScreen

const styles = StyleSheet.create({})