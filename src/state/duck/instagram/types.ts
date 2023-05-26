export interface InstaState {
  loading: boolean;
  post: any;
  subscribe: {
    isSubscribing: boolean;
    subscribed: boolean;
    message: string | null;
  },
  contact: {
    sending: boolean;
    sent: boolean;
    submitted: boolean;
    error: boolean;
    message: string | null;
  }
}

export interface Subscribe {
  email: string;
}

export interface contactParams {
   name: string;
   email: string;
   message: string;
}

export interface WebApiResult {
  code: number | null;
  data: any;
  message: string | null;
}