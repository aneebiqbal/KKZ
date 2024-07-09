import {
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_DETAILS_SUCCESS,
} from '../constants/action-types';

import Status from '../constants/status';

const initialState = {
  loggedIn: false,
  user: null,
  status: Status.DEFAULT,
};

export default function getAccountsReducer(
  state = initialState,
  {type, payload},
) {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        status: Status.LOADING,
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: payload,
        status: Status.SUCCESS,
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: null,
        status: Status.FAILURE,
      };
    case LOGOUT:
      return initialState;

    case UPDATE_USER_DETAILS_SUCCESS:
      payload.accessToken = state.user.accessToken;
      payload.fullName = payload.firstName + ' ' + payload.lastName;
      payload.id = state.user.id;
      payload.roles = state.user.roles;
      payload.userName = state.user.userName;
      payload.mobile = state.user.mobile;
      return {
        loggedIn: true,
        user: payload,
        status: Status.SUCCESS,
      };
    default:
      return state;
  }
}
