import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import AppNavigator from './src/Navigation/AppNavigator';

import createStore from './src/Store/CreateStore';

const {store, persistor} = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
