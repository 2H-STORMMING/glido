"use client";

import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../data/results/resultSlice";

export default function Home() {
  //useSelector gets the state from store
  const count = useSelector((state) => {
    console.log(state.data.value);
    return state.data.value;
  }); // Access the counter state

  //useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: </h1> {/* Display the counter state */}
      <button
        onClick={() => {
          dispatch(setData({ hamza: "hadri" }));
        }}
      >
        setData
      </button>
    </div>
  );
}
