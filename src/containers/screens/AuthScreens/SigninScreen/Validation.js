import * as yup from 'yup';

export const signInValidation = yup.object().shape({
  username: yup.string().required('Email is required.').email('Invalid Email.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be atleast 6 characters long.'),
});
