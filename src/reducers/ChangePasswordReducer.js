import {
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
} from '../constants/action-types';

import Status from '../constants/status';

const initialState = {
  statusChangePassword: Status.DEFAULT,
};
export default function changePasswordReducer(state = initialState, {type}) {
  switch (type) {
    case CHANGE_PASSWORD_LOADING:
      return {
        statusChangePassword: Status.LOADING,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        statusChangePassword: Status.SUCCESS,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        statusChangePassword: Status.FAILURE,
      };
    default:
      return state;
  }
}
