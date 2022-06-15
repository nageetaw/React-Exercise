import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import searchReducer from "./slice/SerachSlice";

export default configureStore({
  reducer: { user: userReducer, search: searchReducer },
});
