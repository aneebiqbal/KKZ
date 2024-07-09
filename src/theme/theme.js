/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {configureFonts} from 'react-native-paper';

const fonts = {
  regular: 'Helvetica Neue',
  medium: 'HelveticaNeue-Medium',
  light: 'HelveticaNeue-Light',
  thin: 'HelveticaNeue-Thin',
};

const primary = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#F33810',
    accent: '#f67357',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#001021',
    error: '#B71F0E',
    disabled: '#BEC6C6',
    placeholder: '#ddd',
    backdrop: '#001021',
  },
  fonts: configureFonts(fonts),
  animation: {scale: 1.0},
};

const primaryDark = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#0B5351',
    accent: '#11B5E4',
    background: '#343434',
    surface: '#3a3a3a',
    text: '#FFFFFF',
    error: '#B71F0E',
    disabled: '#FFFFFF',
    placeholder: '#ddd',
    backdrop: '#343434',
  },
  fonts: configureFonts(fonts),
  animation: {scale: 1.0},
};

export default {
  primary,
  primaryDark,
};
