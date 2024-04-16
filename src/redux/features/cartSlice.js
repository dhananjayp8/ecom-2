import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

//card slice

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(ItemIndex);
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },

    //remove single item
    removeSingleItem: (state, action) => {
      const ItemInd = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[ItemInd].qnty >= 1) {
        state.carts[ItemInd].qnty -= 1;
      }
    },

    emptycartItem: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeSingleItem, removeToCart, emptycartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
