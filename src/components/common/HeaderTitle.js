import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Fonts} from '../../theme';
const propTypes = {};

const defaultProps = {};

const HeaderTitle = ({title, notCenter}) => {
  return (
    <Text style={[Fonts.h6, Fonts.bold, notCenter ? styles.p10 : Fonts.center]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  p10: {
    padding: 10,
  },
});

HeaderTitle.propTypes = propTypes;

HeaderTitle.defaultProps = defaultProps;

export default HeaderTitle;
