import { configureStore } from "@reduxjs/toolkit";
import {camperReducer} from "./slice";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    },
});

export default store;
