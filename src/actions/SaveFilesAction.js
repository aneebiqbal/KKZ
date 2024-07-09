import { SAVE_VOICE_URL } from "../constants/action-types";

export const saveVoiceUrl = (voiceUrl) => {
  debugger;
  const fileName = `file_${Date.now()}_${Math.floor(Math.random() * 10000)}.mp3`;
  const currentDate = new Date();
  const date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const payload = {
    url: voiceUrl,
    fileName: fileName,
    date: date,
    time: time,
  };

  return {
    type: SAVE_VOICE_URL,
    payload: payload,
  };
};
