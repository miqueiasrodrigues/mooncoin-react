import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../models/interfaces/Response";

interface AppState {
  response: IResponse;
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
  response: {
    status: "success",
    message: "",
    data: null,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setResponse(state, action: PayloadAction<IResponse>) {
      state.response = action.payload;
    },
  },
});

export const { setIsLoading, setResponse } = appSlice.actions;

export default appSlice.reducer;
