import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';
import {styles} from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import {ButtonIconOrText} from '../../../components/common';
import {height} from '../../../theme/Metrics';
import {useDispatch} from 'react-redux';
import {logout} from '../../../actions/AccountActions';
import strings from '../../../constants/strings';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonIconOrText from '../../../components/common/ButtonIconOrText';
import { Images } from '../../../theme';
import { Divider } from 'react-native-paper';


const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const defaultProps = {};

const DrawerScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader navigation={navigation} />

      <View style={styles.marginTop}>
        <DrawerItem
          title={strings.home}
          image={Images.homeDrawer}
          onPress={() => {
            navigation.closeDrawer();
            navigation.replace('HomeScreen');
          }}
        />
         <DrawerItem
          title={strings.speeches}
          image={Images.speeches}
          onPress={() => {
            navigation.closeDrawer();
            navigation.replace('SpeechesScreen');
          }}
        />
        <DrawerItem
          title={strings.notifications}
          image={Images.notification}
          onPress={() => {
            navigation.closeDrawer();
            navigation.replace('FavouriteRestaurantsScreen');
          }}
        />
        <DrawerItem
          title={strings.help}
          image={Images.help}
          onPress={() => {
            navigation.closeDrawer();
            navigation.replace('FavouriteRestaurantsScreen');
          }}
        />
      </View>

      <Divider style={{marginTop: 320}}/>

      <TouchableOpacity 
       onPress={() => {
          dispatch(logout());
          navigation.closeDrawer();
        }}
        style={styles.logoutBtnStyle}
        >
          <Text style={{fontWeight:"500", fontSize: 20}}>{strings.logOut}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

DrawerScreen.propTypes = propTypes;
DrawerScreen.defaultProps = defaultProps;
export default DrawerScreen;