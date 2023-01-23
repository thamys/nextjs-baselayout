import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { API } from "@services/api";
import { handleApiError } from "@utils/error";
import { ApiError, DefaultState } from "@interfaces/store.typing";
import { AxiosResponse } from "axios";

type InitialState = DefaultState & {
  user: any;
};

export const INITIAL_STATE: InitialState = {
  status: "idle",
  error: null,
  user: null,
};

export const postLoginAction = createAsyncThunk<
  AxiosResponse<any>,
  any,
  { rejectValue: ApiError }
>("auth/login", async (form, thunkAPI) => {
  try {
    return await API.post("/auth");
  } catch (error) {
    return thunkAPI.rejectWithValue(handleApiError(error));
  }
});

// REDUCER
export const authReducer = createReducer<InitialState>(
  INITIAL_STATE,
  (builder) => {
    // Empresas
    builder.addCase(postLoginAction.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.data;
      state.error = null;
    });
    builder.addCase(postLoginAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(postLoginAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
);
