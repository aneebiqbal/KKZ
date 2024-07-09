import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ApplicationStyles, Colors} from '../../theme';

const PropTypes = {};
const defaultProps = {};
const ShadowBox = ({heading, image, style, onPress, children, image2, heading2, imgStyle}) => (
  <View onPress={onPress} style={[styles.container, ApplicationStyles.shadow, style]}>
      <View style={{flexDirection:'column',}}>
        <Text style={{fontWeight:'500', fontSize: 14}}>
          {heading}
        </Text>
        <Text style={{fontWeight:'500', fontSize: 14}}>
          {heading2}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            style={[styles.imgStyle, imgStyle]}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
          source={image2}
          style={[styles.imgStyle2, style]}
        />
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding: 10,
    backgroundColor:"white",
    margin: 8,
    borderRadius: 10,
    justifyContent:"center"
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 37,
    width: 37,
    marginBottom: 20,
    marginTop: 20
  },
  imgStyle2: {
    height: 70,
    width: 70,
    left: 7,
    top: 40,
    marginBottom: 10,
    position: 'relative'
  },
  textStyle: {
    color: Colors.black,
    marginLeft: 2,
  },
});

ShadowBox.propTypes = PropTypes;
ShadowBox.defaultProps = defaultProps;

export default ShadowBox