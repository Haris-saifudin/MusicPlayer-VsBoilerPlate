import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  changeSessionStatus : ['status'],
});

export const SessionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  hasSession: false,
};

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  getSessionStatus : (state) => state.session.hasSession
};


/* ------------- Reducers ------------- */

export const changeStatusReducer = (state, {status}) => {
  console.log('action request');  
  return {
    hasSession: status
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_SESSION_STATUS]: changeStatusReducer,
 
});
