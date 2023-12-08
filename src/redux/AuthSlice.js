import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://book-store-api-behw.onrender.com/auth"; // Replace with your actual backend API base URL

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }) => {
    try {
      const response = await fetch(`${API_BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, password }) => {
    try {
      const response = await fetch(`${API_BASE}/singin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem("token", token);
        return { ...state, token, user };
      })
      .addCase(signin.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem("token", token);
        return { token, user };
      });
  },
});

export default authSlice.reducer;
