import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { camperReducer } from "./slice";

export const store = configureStore({
    reducer: {
      camper: camperReducer
    }
  });

export default store