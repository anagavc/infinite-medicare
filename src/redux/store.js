import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import prescriptionReducer from "./prescriptionSlice";
import appointmentReducer from "./appointmentSlice";
import patientReducer from "./patientSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  prescription: prescriptionReducer,
  appointment: appointmentReducer,
  patient: patientReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
