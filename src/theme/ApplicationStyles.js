/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import {HP, WP} from '../utils';
import Colors from './Colors';
import {height, highResolutionWidth, width} from './Metrics';

export default {
  p20: {
    padding: 20,
  },
  //App Header
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    color: Colors.white,
    textAlign: 'center',
  },
  //App Status Bar
  appbar: {
    statusBarColor: Colors.primary,
    barStyle: 'light-content',
    backgroundColor: Colors.primary,
    tintColor: Colors.white,
  },
  //Drawer
  containerStyle: {
    backgroundColor: Colors.drawerHeader,
    justifyContent: 'space-between',
    width: width > highResolutionWidth ? width / 4 : width /2 ,
    right: 15
  },
  logoStyle: {
    height: 80,
    width: 80,
  },
  drawerMenu: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  drawerMenuFocused: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  paginatedHorizontalFlatlistSpinner: {
    left: 10,
  },
  fullScreenSpinner: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  row_space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row_centered: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
};
