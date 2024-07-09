import axios from "axios";
import { FETCH_LANGUAGES_SUCCESS } from "../constants/action-types";


export const fetchLanguagesSuccess = (languageData) => {
  debugger;
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    payload: languageData,
  };
};


export const fetchLanguages = () => {
  return async (dispatch, getState) => {
    const { FetchLanguagesState } = getState(); // Get the current state from the Redux store
    const { languageData } = FetchLanguagesState;
    if (languageData && languageData.length > 0) {
      debugger;
      // If languages data is already available, return it from the Redux store
      return languageData;
    }

    try {
      const response = await axios.get(
        "https://cloudlabs-text-to-speech.p.rapidapi.com/languages",
        {
          headers: {
            'X-RapidAPI-Key': '6ccaf081c9msh08eea2fde607c34p1c375djsnf955e37e3e6b',
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        }
        }
      );
      debugger;
      dispatch(fetchLanguagesSuccess(response.data.languages));
      // Return the list of voices from the response
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
};
