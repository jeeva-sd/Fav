import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstaState } from './types';

const initialState: InstaState = {
  loading: false,
  post: []
};

const InstaSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {
    fetchPost: (state: InstaState, action: PayloadAction<string>) => {
      state.loading = action.payload ? true : false;
    },
    setPost: (state: InstaState, action: PayloadAction<any>) => {
      state.loading = false;
      state.post = action.payload[0];
    },
  },
});

export const { setPost, fetchPost } = InstaSlice.actions;
export const { reducer: InstaReducer } = InstaSlice;

