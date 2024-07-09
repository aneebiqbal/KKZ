import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Images, ApplicationStyles} from '../theme';
import {Header} from '../components/common';
// search - outline

export function getOptions(props) {
  return {
    header: () => <Header opts={props} />,
    headerStyle: ApplicationStyles.headerStyle,
    headerTitleStyle: ApplicationStyles.headerTitleStyle,
  };
}

export const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity style={styles.padding} onPress={() => toggleDrawer()}>
      <Image
        source={Images.menu}
        style={[ApplicationStyles.drawerMenu, styles.opacity]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  padding: {
    padding: 20,
  },
  opacity: {
    opacity: 1,
  },
});
