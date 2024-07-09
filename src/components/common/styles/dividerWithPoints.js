import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight} from '../../../theme/Metrics';
import {HP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: height > highResolutionHeight ? HP('10') : HP('12'),
  },
  circle: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    backgroundColor: Colors.primaryLight,
  },
  lineContainer: {
    width: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  line: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.primary,
    flex: 1,
  },
});
