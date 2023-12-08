import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://book-store-api-behw.onrender.com/shopping-cart";

export const fetchShoppingCart = createAsyncThunk(
  "cart/fetchShoppingCart",
  async (token) => {
    const response = await fetch(`${API_BASE}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  }
);

// actions/cartActions.js
export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ token, bookId, quantity }) => {
      const response = await fetch(`${API_BASE}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookId, quantity }),
      });
  
      return await response.json();
    }
  );
  
  export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async ({ token, bookId }) => {
      const response = await fetch(`${API_BASE}/remove/${bookId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return await response.json();
    }
  );
  
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchShoppingCart.fulfilled, (state, action) => {
            console.log(action,"GET_CARTTT")
          return action.payload.shoppingCart?.items || [];
        })
        .addCase(addToCart.fulfilled, (state, action) => {
            console.log(action,"ADD_TO_CART")
          return action.payload;
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
          return action.payload;
        });
    },
  });
  
  export default cartSlice.reducer;
  