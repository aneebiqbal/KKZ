import * as yup from 'yup';

export const changePasswordValidation = yup.object().shape({
  oldpassword: yup
    .string()
    .required('Old Password is required.')
    .min(6, 'Password must be atleast 6 characters long.'),
  newpassword: yup
    .string()
    .required('New Password is required.')
    .min(6, 'Password must be atleast 6 characters long.'),
  confirmpassword: yup
    .string()
    .required('Confirm Password is required.')
    .min(6, 'Password must be atleast 6 characters long.'),
});