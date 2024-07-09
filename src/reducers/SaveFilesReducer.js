import { SAVE_VOICE_URL } from "../constants/action-types";

const initiaState = {
  voices: [],
};

export default function filesReducer (state = initiaState, action) {
  switch (action.type) {
    case SAVE_VOICE_URL:
      return {
        ...state,
        voices: [...state.voices, action.payload],
      };
      default:
        return state;
  }
};
