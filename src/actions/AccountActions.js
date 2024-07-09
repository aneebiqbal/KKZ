import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGOUT,
} from '../constants/action-types';
import {postFunction} from '../api';
import {baseUrl} from '../config';
import Status from '../constants/status';

export const signInLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const signInFaliure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const signInSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const logout = () => {
  return {type: LOGOUT};
};

export const signIn = (body, _setError) => {
  return dispatch => {
    dispatch(signInLoading());
    postFunction(`${baseUrl}/User/Authenticate`, body)
      .then(data => {
        console.log(data.data);
        if (data.data.status === 200) {
          dispatch(signInSuccess(data.data.result));
        } else {
          if (data.data.status === 406) {
            _setError('Email or password is invalid.');
          }
          dispatch(signInFaliure());
        }
      })
      .catch(err => {
        console.log('sign in error: ', err);
        dispatch(signInFaliure());
      });
  };
};

export const signInExternalSource = (body, _setError) => {
  console.log(body);

  return dispatch => {
    dispatch(signInLoading());
    postFunction(`${baseUrl}/User/externalSourceLogin`, body)
      .then(data => {
        console.log(data.data);
        if (data.data.status === 200) {
          dispatch(signInSuccess(data.data.result));
        } else {
          if (data.data.status === 406) {
            _setError('Email or password is invalid.');
          }
          dispatch(signInFaliure());
        }
      })
      .catch(err => {
        console.log('sign in error: ', err);
        dispatch(signInFaliure());
      });
  };
};

export const signUp = (body, _setError) => {
  return dispatch => {
    console.log('in signup func');
    dispatch(signInLoading());
    postFunction(`${baseUrl}/User/CustomerSignUp`, body)
      .then(data => {
        console.log(data.data);
        if (data.data.status === 200) {
          dispatch(signInSuccess(data.data.result));
        } else {
          if (data.data.status === 406) {
            _setError(data.data.message);
          }
          dispatch(signInFaliure());
        }
      })
      .catch(_err => {
        console.log(_err);
        dispatch(signInFaliure());
      });
  };
};
export const signUpExternalSource = (body, _setError) => {
  return dispatch => {
    console.log('in signup func', body);
    dispatch(signInLoading());
    postFunction(`${baseUrl}/User/ExternalSourceSignUp`, body)
      .then(data => {
        console.log(data.data);
        if (data.data.status === 200) {
          dispatch(signInSuccess(data.data.result));
        } else {
          if (data.data.status === 406) {
            _setError(data.data.message);
          }
          dispatch(signInFaliure());
        }
      })
      .catch(_err => {
        console.log(_err);
        dispatch(signInFaliure());
      });
  };
};

