import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import {camperReducer} from "./slice";
import { favoriteReducer } from "./favoriteSlice";

const rootReducer = combineReducers({
  campers: camperReducer,
  favorite: favoriteReducer
});

const persistConfig = {
  key: "root",
  storage, 
  whitelist: ['favorite'], 
};


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);

