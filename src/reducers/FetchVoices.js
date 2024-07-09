import { FETCH_VOICES_SUCCESS } from "../constants/action-types";

const initialState = {
  voiceData: [],
};

export default function FetchVoiceReducer (state = initialState, {type, payload},) {
  switch (type) {
    case FETCH_VOICES_SUCCESS:
      return {
        ...state,
        voiceData: payload,
      };
    default:
      return state;
  }
};

