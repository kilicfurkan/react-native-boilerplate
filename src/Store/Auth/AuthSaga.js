import {put, call} from 'redux-saga/effects';

import AuthActions from './AuthRedux';
import * as Requests from '../../Service/Api';

export function* register(action) {
  const {email, password} = action;
  const body = {email, password};

  try {
    const response = yield call(Requests.register, body);
    yield put(AuthActions.registerSucceeded(response));
  } catch (error) {
    yield put(AuthActions.registerFailed());
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  }
}

export function* login(action) {
  const {email, password} = action;
  const params = {email, password};

  try {
    const response = yield call(Requests.login, params);
    yield put(AuthActions.loginSucceeded(response));
  } catch (error) {
    yield put(AuthActions.loginFailed());

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  }
}
