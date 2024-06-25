import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idToRemove);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    clearItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    getTotalAmount: (state) => {
      state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  },
});

export const { addToCart, removeFromCart, clearItemFromCart, getTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
