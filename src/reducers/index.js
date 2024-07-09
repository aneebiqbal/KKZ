import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import ChangePasswordReducer from "./ChangePasswordReducer";
import fetchVoiceReducer from "./FetchVoices";
import FetchLanguageReducer from "./FetchLanguages";
import VoiceLangReducer from "./VoiceAndLangReducer";
import generateVoiceReducer from "./GenerateVoiceReducer";
import filesReducer from "./SaveFilesReducer";

const rootReducer = combineReducers({
  AccountState: AccountReducer,
  ChangePasswordState: ChangePasswordReducer,
  FetchVoiceState: fetchVoiceReducer,
  FetchLanguagesState: FetchLanguageReducer,
  AccentReducer: VoiceLangReducer,
  GenerateVoiceState: generateVoiceReducer,
  SaveFilesState: filesReducer,

});

export default rootReducer;
