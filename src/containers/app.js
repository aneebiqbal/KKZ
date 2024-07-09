import React from 'react';
import RootNavigator from '../navigators/RootNavigator';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from '../stores/store';

import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
          <RootNavigator />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
