import {
  SET_SELECTED_LANGUAGE,
  SET_SELECTED_ACCENT,
} from "../constants/action-types";

const initialState = {
  selectedLanguage: null,
  selectedAccent: null,
};

export default function VoiceLangReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case SET_SELECTED_ACCENT:
      return {
        ...state,
        selectedAccent: action.payload,
      };
    default:
      return state;
  }
}
