import {StyleSheet, Platform} from 'react-native';
import Colors from './Colors';
import {normalize} from '../utils';
const size = {
  h1: normalize('38'),
  h2: normalize('34'),
  h3: normalize('30'),
  h4: normalize('20'),
  h5: normalize('18'),
  h6: normalize('16'),
  input: normalize('16'),
  regular: normalize('16'),
  medium: normalize('13'),
  small: normalize('12'),
  extraSmall: normalize('10'),
  dExtraSmall: normalize('9'),
  dExtraExtraSmall: normalize('8'),
  weight1: Platform.OS === 'ios' ? '800' : 'bold',
  weight2: Platform.OS === 'ios' ? '600' : 'bold',
  weight3: '400',
  weight4: '200',
  weight5: '100',
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  small: {
    fontSize: Platform.OS === 'android' ? size.small : size.extraSmall,
  },
  extraSmall: {
    fontSize:
      Platform.OS === 'android' ? size.extraSmall : size.dExtraExtraSmall,
  },
  dExtraSmall: {
    fontSize:
      Platform.OS === 'android' ? size.dExtraSmall : size.dExtraExtraSmall,
  },
  dExtraExtraSmall: {
    fontSize: size.dExtraExtraSmall,
  },
  normal: {
    fontSize: size.regular,
  },
  medium: {
    fontSize: size.medium,
  },
  bold: {
    fontWeight: 'bold',
  },

  weight1: {
    fontWeight: size.weight1,
  },
  weight2: {
    fontWeight: size.weight2,
  },
  weight3: {
    fontWeight: size.weight3,
  },
  weight4: {
    fontWeight: size.weight4,
  },
  weight5: {
    fontWeight: size.weight5,
  },
  white: {
    color: Colors.white,
    fontFamily: 'fontAwesome',
  },
  grey: {
    color: '#333333',
  },
  light: {
    color: '#666D7B',
  },
  center: {
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  headingW: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: size.medium,
  },
});
