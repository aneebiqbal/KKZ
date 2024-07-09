import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.drawerBody,
    flexDirection:"column",
    justifyContent: 'flex-start',
  },
  profilePic: {
    height: 70,
    width: 70,
    marginLeft: WP('9'),
    borderRadius: 60,
  },
  close: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginLeft: WP('4'),
    marginBottom: 30,
  },
  name: {
    marginTop: HP('2'),
    marginHorizontal: WP('10'),
    color: Colors.primaryGrayMid,
    fontWeight: 'bold',
  },
  email: {
    marginHorizontal: WP('5'),
    fontWeight: '300',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: WP('9'),
    paddingVertical: WP('1'),
  },
  title: {
    flex: 1,
    marginStart: WP('3'),
    color: Colors.black,
  },
  mv10: {
    marginVertical: HP('2'),
  },
  flex_end: {
    justifyContent: 'flex-end',
  },
  logoutBtnStyle: {
    width: WP('25'),
    height: HP('7'),
    position: 'absolute',
    bottom: HP('2'),
    marginLeft: WP('10'),
    borderRadius: 30,
    marginHorizontal: 10,
    zIndex: 10,
  },
  marginTop: {
    marginTop: HP('4'),
  },
});
