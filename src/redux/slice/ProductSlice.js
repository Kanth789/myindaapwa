import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addProductToItems: (state, action) => {
      const newItems = action.payload.filter(
        (newItem) => !state.items.some((item) => item.id === newItem.id)
      );
      state.items.push(...newItems);
    },
  },
});

export const { addProductToItems } = ProductSlice.actions;
export default ProductSlice.reducer;

