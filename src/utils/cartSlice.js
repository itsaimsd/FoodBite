// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );

      existingItem
        ? (existingItem.quantity += 1)
        : state.items.push({ ...item, quantity: 1 });
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.card.info.id !== itemId
        );
      }
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, decreaseItem, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
