import {combineReducers} from 'redux';
import configureStore from './ConfigureStore';
import rootSaga from './RootSaga';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    auth: require('./Auth/AuthRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
