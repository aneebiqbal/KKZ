import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton, Header, InputField } from "../../../components/common";
import strings from '../../../constants/strings';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {changePasswordValidation} from './Validation';
import { ApplicationStyles } from '../../../theme';
import { WP } from '../../../utils';
import Status from '../../../constants/status';
import {changePassword} from '../../../actions';

const ChangePasswordScreen = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { statusChangePassword } = useSelector(({ ChangePasswordState }) => ChangePasswordState);
  const { status, user } = useSelector(({ AccountState }) => AccountState);
  return (
    <SafeAreaView style={styles.container}>
      <Header left screen={'Change Password'} divider />
      <Formik
        validationSchema={changePasswordValidation}
        validateOnChange={false}
        initialValues={{
          oldpassword: '',
          newpassword: '',
          confirmpassword: '',
        }}
        onSubmit={values => {
          setError('');
          dispatch(
            changePassword(
              {
                oldpassword: values.oldpassword,
                newpassword: values.newpassword,
                confirmpassword: values.confirmpassword,
              },
              user.accessToken,
              setError,
              setOpenPopup,
            ),
          );
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={ApplicationStyles.p20}>
            <InputField
              placeholder={strings.oldPassword}
              text={values.oldpassword}
              secureTextEntry
              setText={handleChange('oldpassword')}
              error={errors.oldpassword && errors.oldpassword}
            />
            <InputField
              // leftIcon={'key-variant'}
              placeholder={strings.newPassword}
              text={values.newpassword}
              secureTextEntry
              setText={handleChange('newpassword')}
              error={errors.newpassword && errors.newpassword}
            />
            <InputField
              // leftIcon={'key-variant'}
              placeholder={strings.confirmPassword}
              text={values.confirmpassword}
              secureTextEntry
              setText={handleChange('confirmpassword')}
              error={errors.confirmpassword && errors.confirmpassword}
            />
            <View style={{ paddingHorizontal: 0 }}>
              <Text style={styles.errorStyle}>{error}</Text>
            </View>
            <View style={{ flex: 1, justifyContent:"flex-start", top: 450 }}>
              <FullwidthButton
                label={'Change Password'}
                onPress={handleSubmit}
                loading={statusChangePassword === Status.LOADING}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})