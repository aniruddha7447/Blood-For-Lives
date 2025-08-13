import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import adminReducer from "../Features/admin/adminSlice.jsx";
import peristReducer from "../Features/persist/persist.jsx";
import userReducer from "../Features/user/userSlice.jsx";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const combinedReducer = combineReducers({
  users: userReducer,
  persist: peristReducer,
  admin:adminReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["persist"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const rootReducer = (state, action) => {
  if (action.type === 'peristReducer/logoutUser') {
    state = undefined;
    //this is use for clearing persist reducer
    storage.removeItem('persist:root')
  }
  return persistedReducer(state, action);
};



export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});