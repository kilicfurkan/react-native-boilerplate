import {takeLatest, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {AuthTypes} from './Auth/AuthRedux';

/* ------------- Sagas ------------- */
import {register, login} from './Auth/AuthSaga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(AuthTypes.REGISTER_IN_PROGRESS, register),
    takeLatest(AuthTypes.LOGIN_IN_PROGRESS, login),
  ]);
}
