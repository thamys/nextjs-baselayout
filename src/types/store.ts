import { AxiosError } from 'axios';

export type ApiError = {
  status?: number;
  message?: string;
  details?: any;
  stack?: []
};

export type RequestError = Error | AxiosError<{error: ApiError}>;


export interface DefaultState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: ApiError | Error;
}
