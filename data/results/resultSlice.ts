"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { hadri: "hamza" },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
