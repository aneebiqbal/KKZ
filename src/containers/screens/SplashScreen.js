import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Images} from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    appStartLogic();
  });
  
    const appStartLogic = () => {
      setTimeout(() => {
        navigation.replace('AppStack');
      }, 1000);
    };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.splash} style={styles.fullWidth} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
    height: '100%',
  },
});

SplashScreen.propTypes = propTypes;
SplashScreen.defaultProps = defaultProps;

export default SplashScreen;
