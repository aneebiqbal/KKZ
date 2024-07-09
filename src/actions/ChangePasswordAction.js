import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_FAILURE,
} from '../constants/action-types';
import {patchFunctionWithAuthToken, patchFunction, postFunction} from '../api';
import {baseUrl} from '../config';
import Status from '../constants/status';

export const changePasswordLoading = () => {
  return {
    type: CHANGE_PASSWORD_LOADING,
  };
};

export const changePasswordFaliure = () => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
  };
};

export const changePasswordSuccess = data => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};
export const changePassword = (body, token, _setError, _setOpenPopup) => {
  return dispatch => {
    dispatch(changePasswordLoading());
    patchFunctionWithAuthToken(`${baseUrl}/User/ChangePassword`, body, token)
      .then(data => {
        console.log(data.data);
        if (data.data.status === 200) {
          dispatch(changePasswordSuccess(data.data.result));
          _setOpenPopup(true);
        } else {
          if (data.data.status === 406) {
            _setError(data.data.message);
          }
          dispatch(changePasswordFaliure());
        }
      })
      .catch(err => {
        console.log('sign in error: ', err);
        dispatch(changePasswordFaliure());
      });
  };
};
