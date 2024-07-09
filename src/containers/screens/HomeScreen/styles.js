import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  image: {
    top: 50,
    right: -10,
    width: 500,
    height: 900,
    position:'absolute',
    backgroundColor: Colors.transparent,
  },
  box: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent:"flex-start",
  },
  text: {
    position: 'absolute',
    left: 50,
    fontSize: 26,
    color: 'white',
    fontWeight:'600',
    textAlign: 'left',
  },
});
