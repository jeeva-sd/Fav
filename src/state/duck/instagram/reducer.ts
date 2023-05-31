import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WebApiResult, InstaState, Subscribe, contactParams } from './types';

const initialState: InstaState = {
  loading: false,
  post: [],
  subscribe: {
    isSubscribing: false,
    subscribed: false,
    message: null,
  },
  contact: {
    sending: false,
    sent: false,
    message: null,
    submitted: false,
    error: false
  }
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

    subscribeRequest: (state: InstaState, action: PayloadAction<Subscribe>) => {
      state.subscribe.isSubscribing = action?.payload?.email ? true : false;
      state.subscribe.subscribed = false;
      state.subscribe.message = null;
    },
    subscribtionDone: (state: InstaState, action: PayloadAction<WebApiResult>) => {
      state.subscribe.isSubscribing = false;
      state.subscribe.subscribed = true;
      state.subscribe.message = action?.payload.message;
    },
    subscribtionError: (state: InstaState, action: PayloadAction<WebApiResult>) => {
      state.subscribe.isSubscribing = false;
      state.subscribe.message = action?.payload?.message;
    },

    contactRequest: (state: InstaState, action: PayloadAction<contactParams>) => {
      state.contact.sending = action?.payload ? true : false;
      state.contact.sent = false;
      state.contact.submitted = true;
      state.contact.error = false;
      state.subscribe.message = null;
    },
    messageSent: (state: InstaState, action: PayloadAction<WebApiResult>) => {
      state.contact.sending = false;
      state.contact.sent = true;
      state.subscribe.message = action?.payload?.message;
    },
    contactError: (state: InstaState, action: PayloadAction<WebApiResult>) => {
      state.contact.sending = false;
      state.contact.error = true;
      state.subscribe.message = action?.payload?.message;
    },
  },
});

export const { setPost, fetchPost, subscribeRequest, subscribtionDone, subscribtionError,
  contactRequest, messageSent, contactError } = InstaSlice.actions;
export const { reducer: InstaReducer } = InstaSlice;

