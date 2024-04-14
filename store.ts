"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/results/resultSlice";
import searchReducer from "./data/results/searchSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  search: searchReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
