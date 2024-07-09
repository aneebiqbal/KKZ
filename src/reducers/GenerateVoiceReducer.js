import {
  GENERATE_VOICE_LOADING,
  GENERATE_VOICE_FAILURE,
  GENERATE_VOICE_SUCCESS,
  CLEAR_VOICE_URL
} from "../constants/action-types";

import Status from "../constants/status";

const initialState = {
  audioUrl: '',
  status: Status.DEFAULT,
};

export default function generateVoiceReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_VOICE_LOADING:
      return {
        ...state,
        status: Status.LOADING,
      };
    case GENERATE_VOICE_SUCCESS:
      debugger;
      return {
        ...state,
        audioUrl: action.payload,
        status: Status.SUCCESS,
      };
    case GENERATE_VOICE_FAILURE:
      return {
        ...state,
        status: Status.FAILURE,
      };
      case CLEAR_VOICE_URL:
      return {
        ...state,
        audioUrl: "", 
        status: Status.DEFAULT, 
      };

    default:
      return state;
  }
}
