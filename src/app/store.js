import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice"
import savedReducer from "../features/savedSlice"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        saved: savedReducer
    }
})