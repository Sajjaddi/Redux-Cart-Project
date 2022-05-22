import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      let newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          description: newItem.description,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      // console.log(action);
    },
    removeItemToCart(state, action) {
      let newItem = state.items.find((item) => item.id === action.payload);
      state.totalQuantity--;
      state.changed = true;
      if (newItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        console.log(newItem.price);
        newItem.quantity--;
        newItem.totalPrice = newItem.totalPrice - newItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
