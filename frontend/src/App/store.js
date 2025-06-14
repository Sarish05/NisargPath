import {configureStore} from "@reduxjs/toolkit"
import roleReducer from "../Features/roleSlice.js"

export const store =configureStore({
    reducer: {
    role: roleReducer
  }
});