import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "../features/controlSlice/controlSlice";
import todoSlice from "../features/todoSlice/todoSlice";


export const store =configureStore({
    reducer : {
        control:controlSlice,
        todos:todoSlice
    }
})