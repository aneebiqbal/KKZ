import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Colors} from '../../theme';
import {Icon} from 'react-native-elements';

const propTypes = {};

const defaultProps = {};

const ButtonIconOrText = ({
  label,
  onPress,
  style,
  source,
  imgstyle,
  buttonVariant // circle or default
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
       <Image source={source} style={{height: 60, width: 60}}/>
        <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  labelText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight:'500'
  },
  circle: {
    borderRadius: 20,
    padding: 10
  }
});

ButtonIconOrText.propTypes = propTypes;
ButtonIconOrText.defaultProps = defaultProps;

export default ButtonIconOrText;
