import { AxiosError } from "axios";

export type ApiError = {
  status?: number;
  message?: string;
  details?: any;
  stack?: [];
};

export type RequestError = Error | AxiosError<{ error: ApiError }>;

export type AuthAPIResponse = {
  authAPI: {
    id: string;
    username: string;
    email: string;
    roles: string[];
    accessToken: string;
    tokenType: "Bearer";
  };
};
