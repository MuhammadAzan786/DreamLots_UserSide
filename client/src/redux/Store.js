import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["Auth"],
};

const persistreducer = persistReducer(persistConfig, authreducer);
const store = configureStore({
  reducer: {
    Auth: persistreducer,
  },
});

export default store;
export const persistor = persistStore(store);
