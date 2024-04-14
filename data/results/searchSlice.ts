"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hamza",
};

export const dataSlice = createSlice({
  name: "serach",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = dataSlice.actions;

export default dataSlice.reducer;
