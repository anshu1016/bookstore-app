import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://book-store-api-behw.onrender.com/book";

// Fetch all books thunk
export const fetchAllBooks = createAsyncThunk(
  "events/fetchAll",
  async (token) => {
    const response = await fetch(`${API_BASE}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  }
);

// Create book thunk
export const createNewBook = createAsyncThunk(
  "events/createBook",
  async ({ token, bookData }) => {
    const response = await fetch(`${API_BASE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });

    return await response.json();
  }
);

// Update book thunk
export const updateExistingBook = createAsyncThunk(
  "events/updateBook",
  async ({ token, bookId, bookData }) => {
    const response = await fetch(`${API_BASE}/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });

    return await response.json();
  }
);

// Delete book thunk
export const deleteBookById = createAsyncThunk(
  "events/deleteBook",
  async ({ token, bookId }) => {
    const response = await fetch(`${API_BASE}/${bookId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  }
);

// Fetch a single book thunk
export const fetchSingleBook = createAsyncThunk(
  "events/fetchSingleBook",
  async ({ token, bookId }) => {
    const response = await fetch(`${API_BASE}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        return action.payload.books;
      })
      .addCase(createNewBook.fulfilled, (state, action) => {
        console.log(action, "NEW BOOKKK");
        state.push(action.payload.newBook); // Assuming the response contains the new book with _id
      })
      .addCase(updateExistingBook.fulfilled, (state, action) => {
        const index = state.findIndex((v) => v._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload.data;
        }
      })
      .addCase(deleteBookById.fulfilled, (state, action) => {
        return state.filter((event) => event?._id !== action.payload.book?._id);
      })
      .addCase(fetchSingleBook.fulfilled, (state, action) => {
        // Handle state update for fetching a single book
        // Assuming the response contains the fetched book
        const fetchedBook = action.payload?.book;
        if (fetchedBook) {
          const existingBookIndex = state.findIndex(
            (v) => v._id === fetchedBook._id
          );
          if (existingBookIndex !== -1) {
            state[existingBookIndex] = fetchedBook;
          } else {
            state.push(fetchedBook);
          }
        }
      });
  },
});

export default bookSlice.reducer;
