import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './data.slice';
// Import your reducer files here

const rootReducer = combineReducers({
  data : dataReducer
});

export default rootReducer;