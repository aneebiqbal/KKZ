import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Colors} from '../../theme';

const propTypes = {};

const defaultProps = {};

const Tag = ({
  onPress,
  text,
  type,
}) => {

  const button = (
    <View style={[
      styles.container,
      type === 'success' ? { backgroundColor: Colors.success } : {},
    ]}> 
      <Text style={[type === 'success' ? { color: Colors.white } : {color: Colors.black}]}>{text}</Text>
    </View>
  )

  return onPress ? 
    <TouchableOpacity>
      {button}
    </TouchableOpacity> : button
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGra,
    paddingHorizontal: 25,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

Tag.propTypes = propTypes;

Tag.defaultProps = defaultProps;

export default Tag;
