import {
  SET_SELECTED_LANGUAGE,
  SET_SELECTED_ACCENT,
} from "../constants/action-types";

export const setSelectedLanguage = (language) => ({
  type: SET_SELECTED_LANGUAGE,
  payload: language,
});
debugger;
export const setSelectedAccent = (accent) => ({
  type: SET_SELECTED_ACCENT,
  payload: accent,
});
