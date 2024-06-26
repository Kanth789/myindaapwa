import { createSlice } from "@reduxjs/toolkit";

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idToRemove);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    addQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        }
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    getTotalAmount: (state) => {
      state.totalAmount = calculateTotalAmount(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  getTotalAmount,
  addQuantity,
  removeQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
