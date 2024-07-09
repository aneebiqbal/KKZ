import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AccountState'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = compose(applyMiddleware(thunk));
const store = createStore(persistedReducer, undefined, enhancer);
let persistor = persistStore(store);
export {store, persistor};
