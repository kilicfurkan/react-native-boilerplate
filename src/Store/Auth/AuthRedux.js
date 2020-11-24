import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  registerInProgress: ['email', 'password'],
  registerSucceeded: ['userData'],
  registerFailed: ['error'],
  loginInProgress: ['email', 'password'],
  loginSucceeded: ['userData'],
  loginFailed: ['error'],
});

/* ------------- Reducer ------------- */

const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
  error: false,
});

const registerInProgress = (state, {}) =>
  state.merge({
    data: {},
    loading: true,
    error: false,
  });

const registerSucceeded = (state, {userData}) =>
  state.merge({
    data: userData,
    loading: false,
    error: false,
  });

const registerFailed = (state, {error}) =>
  state.merge({
    loading: false,
    error,
  });

const loginInProgress = (state, {}) =>
  state.merge({
    data: {},
    loading: true,
    error: false,
  });

const loginSucceeded = (state, {userData}) =>
  state.merge({
    data: userData,
    loading: false,
    error: false,
  });

const loginFailed = (state, {error}) =>
  state.merge({
    loading: false,
    error,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_IN_PROGRESS]: registerInProgress,
  [Types.REGISTER_SUCCEEDED]: registerSucceeded,
  [Types.REGISTER_FAILED]: registerFailed,
  [Types.LOGIN_IN_PROGRESS]: loginInProgress,
  [Types.LOGIN_SUCCEEDED]: loginSucceeded,
  [Types.LOGIN_FAILED]: loginFailed,
});

export const AuthTypes = Types;

export default Creators;
