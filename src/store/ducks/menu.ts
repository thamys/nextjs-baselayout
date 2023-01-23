import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { API } from "@services/api";
import { handleApiError } from "@utils/error";
import { ApiError, DefaultState } from "@interfaces/store.typing";
import { AxiosResponse } from "axios";

type InitialState = DefaultState & {
  sidebar: any[];
};

export const INITIAL_STATE: InitialState = {
  status: "idle",
  error: null,
  sidebar: [],
};

export const getSidebarItemsAction = createAsyncThunk<
  AxiosResponse<any[]>,
  void,
  { rejectValue: ApiError }
>("menus/getSidebarItems", async (_, thunkAPI) => {
  try {
    return await API.get("/menus");
  } catch (error) {
    return thunkAPI.rejectWithValue(handleApiError(error));
  }
});

// REDUCER
export const menuReducer = createReducer<InitialState>(
  INITIAL_STATE,
  (builder) => {
    // Empresas
    builder.addCase(getSidebarItemsAction.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.sidebar = action.payload.data;
      state.error = null;
    });
    builder.addCase(getSidebarItemsAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getSidebarItemsAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
);
