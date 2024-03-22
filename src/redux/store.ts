import appReducer from "./appReducer";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineSlices({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
