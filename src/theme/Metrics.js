/**
 * This file contains metric values that are global to the application.
 */

import {Dimensions, Platform} from 'react-native';
import {HP} from '../utils';

// Examples of metrics you can define:
export const {width, height} = Dimensions.get('window');
export const tiny = 5;
export const small = tiny * 2; // 10
export const normal = tiny * 3; // 15
export const medium = normal * 2; // 30
export const highResolutionHeight = 850;
export const mediumResolutionHeight = 650;
export const lowResolutionHeight = 500;
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export default {
  height: height,
  width: width,
  highResolutionHeight,
  mediumResolutionHeight,
  lowResolutionHeight,
  bottomMargin: {
    marginBottom: normal,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },

  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },

  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },

  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizontalPadding: {
    paddingHorizontal: normal,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },

  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  smallVerticalPadding: {
    paddingVertical: small,
  },
  verticalPadding: {
    paddingVertical: normal,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },
  ml20: {
    marginLeft: 20,
  },
  mr20: {
    marginRight: 20,
  },
  mr10: {
    marginRight: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb50: {
    marginBottom: 50,
  },
};
