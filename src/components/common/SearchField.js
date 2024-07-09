import * as React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HP, WP} from '../../utils';

const SearchField = ({leftIcon, placeholder, style, onChange, searchText}) => {
  return (
    <View style={[styles.container, style]}>
      <AntDesign name="search1" size={20} color={Colors.secGrayMid} />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.secGrayMid}
        placeholder={placeholder}
        value={searchText}
        onChangeText={text => onChange(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    color: Colors.placeholder,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    marginLeft: 10,
    fontSize: 16,
    width: '90%',
  },
});

export default SearchField;
