import axios from "axios";
import { FETCH_VOICES_SUCCESS } from "../constants/action-types";

// Action creator for saving the fetched voices data in Redux
export const fetchVoicesSuccess = (voicesData) => {
  return {
    type: FETCH_VOICES_SUCCESS,
    payload: voicesData,
  };
};

// Action creator for fetching voices data from the API
export const fetchVoices = () => {
  return async (dispatch, getState) => {
    const { FetchVoiceState } = getState(); // Get the current state from the Redux store
    const { voiceData } = FetchVoiceState;
    if (voiceData && voiceData.length > 0) {
      debugger;
      // If languages data is already available, return it from the Redux store
      return voiceData;
    }
    try {
      const response = await axios.get(
        "https://cloudlabs-text-to-speech.p.rapidapi.com/voices",
        {
          params: {
            language_code: 'en-US'
          },
          headers: {
            "X-RapidAPI-Key":
              "6ccaf081c9msh08eea2fde607c34p1c375djsnf955e37e3e6b",
            "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
          },
        }
      );
      dispatch(fetchVoicesSuccess(response.data.voices));
      // Return the list of voices from the response
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
};
