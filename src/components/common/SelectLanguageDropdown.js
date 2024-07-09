import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { Images } from '../../theme';

const SelectLanguageDropdown = ({onLanguageSelect , selectedLanguage}) => {
  //languages <= add this to your props for dynemic languages

  const [selectedLang, setSelectedLang] = useState('English (United States)');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const languages = ['English (United States)', 'English 2 (Comming Soon)', 'English 3 (Comming Soon)' ]; // Add your language options here

  const handleLanguageSelect = (language) => {
    // setSelectedLanguage(language);
    setDropdownVisible(false);
    onLanguageSelect(language); // Invoke the callback function with the selected language
    setSelectedLang(language);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text style={styles.selectedLanguage}>{selectedLang}</Text>
        <Text style={styles.dropdownIcon}>{dropdownVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {languages.map((language) => (
              <TouchableOpacity
                key={language}
                style={styles.languageOption}
                onPress={() => handleLanguageSelect(language)}
              >
                <Text>{language}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 325,
    height: 50,
    left: '50%',
    marginLeft: -162.5,
    top: 20,
    zIndex: 9999,
  },
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderWidth: 0.89,
    borderColor: '#BDC4CD',
    borderRadius: 10,
  },
  selectedLanguage: {
    flex: 1,
  },
  dropdownIcon: {
    fontSize: 14,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    width: 325,
    borderWidth: 0.89,
    borderColor: '#BDC4CD',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    zIndex: 9999,
    elevation: 20,
    maxHeight: 200,
  },
  languageOption: {
    padding: 8,
  },
  });

export default SelectLanguageDropdown