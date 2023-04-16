import { combineReducers } from '@reduxjs/toolkit';
import { InstaReducer } from '../duck/instagram';

const rootReducer = combineReducers({
  instagram: InstaReducer,
});

export default rootReducer;