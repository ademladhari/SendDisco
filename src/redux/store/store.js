import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/reducerauth2";
import medicationReducer from "../reducers/ReducerData";
import reducerUser from "../reducers/reducerUSer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    medications: medicationReducer,
    
  },
});
