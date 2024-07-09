import {
  GENERATE_VOICE_LOADING,
  GENERATE_VOICE_FAILURE,
  GENERATE_VOICE_SUCCESS,
  CLEAR_VOICE_URL
} from "../constants/action-types";
import axios from "axios";

export const generateVoiceLoading = () => {
  return {
    type: GENERATE_VOICE_LOADING,
  };
};

export const generateVoiceFailure = () => {
  return {
    type: GENERATE_VOICE_FAILURE,
  };
};

export const generateVoiceSuccess = (data) => {
  return {
    type: GENERATE_VOICE_SUCCESS,
    payload: data,
  };
};

export const clearVoiceUrl = () => {
  return {
    type: CLEAR_VOICE_URL,
  };
};
export const generateVoice = (textInput, voiceCode) => async (dispatch) => {
  dispatch(generateVoiceLoading());
  try {
    debugger;
    const speed = "1.00";
    const pitch = "1.00";
    const outputType = "audio_url";

    const options = {
      method: "POST",
      url: "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "6ccaf081c9msh08eea2fde607c34p1c375djsnf955e37e3e6b",
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
      },
      data: `voice_code=${encodeURIComponent(
        voiceCode
      )}&text=${encodeURIComponent(textInput)}&speed=${encodeURIComponent(
        speed
      )}&pitch=${encodeURIComponent(pitch)}&output_type=${encodeURIComponent(
        outputType
      )}`,
    };
    const response = await axios.request(options);
    const audioUrl = response.data.result.audio_url;
    debugger;

    dispatch(generateVoiceSuccess(audioUrl));
  } catch (error) {
    dispatch(generateVoiceFailure());
    throw new Error("There was an error");
  }
};
