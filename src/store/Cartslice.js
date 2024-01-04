import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

let Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    Remove: (state, action) => {
      let name = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(name));
      return name;
    },

    Increment: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    Decrement: (state, action) => {
      let item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export let { Add, Remove, Increment, Decrement } = Cartslice.actions;
export default Cartslice.reducer;
