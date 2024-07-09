import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image2: {
    position:'absolute',
    width: 177,
    height: 299,
    left: -5,
    top: 15,
    //transform: [{ rotate: '20deg' }],
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    margin: 20,
  },
  errorStyle: {
    color: Colors.primary,
    textAlign: 'center',
  },
  forgotPassword: {
    color: Colors.lightBlack,
    textAlign: 'right',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  backButton: {
    left: 20
  },
  createPasswordTextMargin: {
    marginTop: 10
  },
  fullWidthButtonStyle: {
    width: '80%',
    margin: 32
  },
  passwordConfermationContainer: {
    flexDirection:'row',
    flex: 1,
    alignItems:'center',
    marginRight:10
  },
  imagePCViewStyle: {
    flex: 0.5
  },
  imagePCStyle: {
    height: 1200,
    width: 350,
  },
  inputFieldContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  errorStyleContainer: {
    paddingHorizontal: 0
  },
  ResetPasswordTextContainer: {
    flex: 0.1,
    height: '100%',
    position: 'relative',
  }

});
