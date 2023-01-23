import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { API } from "@services/api";
import { handleApiError } from "@utils/error";
import { ApiError, DefaultState } from "@interfaces/store.typing";
import { AxiosResponse } from "axios";

type InitialState = DefaultState & {
  examples: any[];
};

export const INITIAL_STATE: InitialState = {
  status: "idle",
  error: null,
  examples: null,
};

export const getExamplesAction = createAsyncThunk<
  AxiosResponse<any[]>,
  void,
  { rejectValue: ApiError }
>("menus/getExamples", async (_, thunkAPI) => {
  try {
    return await API.get("/examples");
  } catch (error) {
    return thunkAPI.rejectWithValue(handleApiError(error));
  }
});

// REDUCER
export const exampleReducer = createReducer<InitialState>(
  INITIAL_STATE,
  (builder) => {
    // Empresas
    builder.addCase(getExamplesAction.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.examples = action.payload.data;
      state.error = null;
    });
    builder.addCase(getExamplesAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getExamplesAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
);
