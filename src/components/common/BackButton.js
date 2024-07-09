import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({onBack, style}) => {
    const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
        <BackIcon
            name="left"
            color={Colors.black}
            size={28}
            onPress={() =>
                onBack ? onBack() : navigation.goBack()
            }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    left: 0,
    top: 25
  }
});

export default BackButton