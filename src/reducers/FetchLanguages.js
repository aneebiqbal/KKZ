import { FETCH_LANGUAGES_SUCCESS } from "../constants/action-types";

const initialState = {
  languageData: [],
};

export default function FetchLanguageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_LANGUAGES_SUCCESS:
      debugger;
      return {
        ...state,
        languageData: payload,
      };
    default:
      return state;
  }
}
