import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});


//const newState = {...state};
//newState[action.payload.id] = action.payload;
//return newState;

//return {...state, [action.payload.id]: action.payload}
