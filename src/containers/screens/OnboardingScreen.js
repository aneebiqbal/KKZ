import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Images} from '../../theme';
// import Onboarding from 'react-native-onboarding-swiper';
import Strings from '../../constants/strings';
import { View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { FullwidthButton } from '../../components/common';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white"}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop: 30}}>
        <Image
          source={Images.onBoarding}
          resizeMode='contain'
          style={{height: 270, width: 300}}
        />
      </View>
      <View style={{justifyContent:"center", alignItems:"center", marginTop: 50}}>
        <Image
          source={Images.logo}
          resizeMode='contain'
          // style={{height: 100, width: 100}}
        />
      </View>
      <Text style={{textAlign:'center', margin: 30, fontSize: 14, fontWeight: '400', color:'#525252'}}> 
        Type Whtats on your mind, we will handle the audio and the accent
      </Text>
     
     <View style={{flex: 1, justifyContent:"flex-end", alignItems:'stretch'}}>
      <FullwidthButton label={'Login to Inovaqo'} onPress={() => navigation.navigate('SigninScreen')}/>
      <TouchableOpacity style={{justifyContent:"center", alignItems:"center", marginBottom: 30}} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={{color:'#105157', fontWeight: '600', fontSize: 16}}>
          Sign up
        </Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

OnboardingScreen.propTypes = propTypes;
OnboardingScreen.defaultProps = defaultProps;

export default OnboardingScreen;
