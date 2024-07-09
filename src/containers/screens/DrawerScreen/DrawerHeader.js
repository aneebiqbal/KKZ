import React from 'react';
import {View, Image, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import strings from '../../../constants/strings';
import {ApplicationStyles, Fonts} from '../../../theme';
import {styles} from './styles';

const propTypes = {};

const defaultProps = {};

const DrawerHeader = ({navigation}) => {
  const {user} = useSelector(({AccountState}) => AccountState);
  return (
    <SafeAreaView>
      <View style={[ApplicationStyles.containerStyle, {flexDirection:"row"}]}>
        {/* <IconButton
          icon="close"
          style={styles.close}
          onPress={() => navigation.closeDrawer()}
        /> */}
        <Image
          source={
            user.imageUrl !== null &&
            user.imageUrl !== undefined &&
            user.imageUrl !== ''
              ? {uri: user.imageUrl}
              : require('../../../assets/images/man3.png')
          }
          style={styles.profilePic}
        />
        <View style={{flexDirection:'column'}}>
          <Text style={[styles.name, Fonts.small, {right: 20}]}>{user?.fullName}</Text>
          <Text style={[styles.email, Fonts.small]}>{user?.userName}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

DrawerHeader.propTypes = propTypes;

DrawerHeader.defaultProps = defaultProps;

export default DrawerHeader;
