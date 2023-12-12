import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },

    Remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    Increment: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    Decrement: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export let { Add, Remove, Increment, Decrement } = Cartslice.actions;
export default Cartslice.reducer;
