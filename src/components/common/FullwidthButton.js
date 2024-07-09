import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Spinner} from '.';
import {Colors, Fonts} from '../../theme';
import {HP, WP} from '../../utils';
const propTypes = {};

const defaultProps = {};

const FullwidthButton = ({
  label,
  onPress,
  style,
  disabled,
  loading,
  notApplyMargin,
}) => {
  return (
    <>
      {!loading ? (
        <Button
          onPress={onPress}
          mode="contained"
          style={[
            styles.container,
            style,
            style
              ? !notApplyMargin && {marginLeft: WP('5')}
              : !notApplyMargin && {margin: WP('3')},
            disabled ? {backgroundColor: Colors.lightGray} : {},
          ]}
          labelStyle={disabled ? {color: Colors.black} : Fonts.regular}
          contentStyle={{height: '100%'}}
          uppercase={false}
        >
          {label}
        </Button>
      ) : (
        <View
          style={[
            styles.container,
            styles.loader,
            style,
            style ? {marginLeft: WP('5')} : {margin: WP('7')},
          ]}>
          <Spinner color={Colors.white} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HP('7'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  loader: {
    backgroundColor: Colors.primary,
  },
});

FullwidthButton.propTypes = propTypes;
FullwidthButton.defaultProps = defaultProps;

export default FullwidthButton;
