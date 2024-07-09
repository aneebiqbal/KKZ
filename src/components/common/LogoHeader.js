import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Helpers, Images} from '../../theme';

const propTypes = {};

const defaultProps = {};

const LogoHeader = ({style, imageStyle}) => {
  return (
    <View style={style}>
      <Image
        source={Images.logo}
        style={[ApplicationStyles.logoStyle, imageStyle, styles.container]}
      />
      <View style={Helpers.center}>
        <Text style={[Fonts.h6, Fonts.white, Fonts.bold]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.white,
  },
});

LogoHeader.propTypes = propTypes;

LogoHeader.defaultProps = defaultProps;

export default LogoHeader;
