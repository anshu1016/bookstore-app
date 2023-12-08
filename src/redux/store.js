import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./BookSlice.js";
import cartReducer from "./CartSlice.js";
import authReducer from "./AuthSlice.js"
const rootReucer={
    books:bookReducer,
   cart:cartReducer,
   auth:authReducer,
}
const store = configureStore({
    reducer:rootReucer
})
export default store;