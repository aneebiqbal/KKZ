import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {ApplicationStyles, Colors} from '../../theme';
import BackIcon from 'react-native-vector-icons/AntDesign';
import strings from '../../constants/strings';

const propTypes = {};

const defaultProps = {};

const AuthHeader = props => {
  return (
    <View style={ApplicationStyles.row_space_between}>
      <BackIcon
        name="left"
        color={Colors.primary}
        size={28}
        onPress={() => props.onBack()}
      />
      <Button mode="text" onPress={() => console.log('Pressed')}>
        {strings.skipCapitalCase}
      </Button>
    </View>
  );
};

AuthHeader.propTypes = propTypes;

AuthHeader.defaultProps = defaultProps;

export default AuthHeader;
