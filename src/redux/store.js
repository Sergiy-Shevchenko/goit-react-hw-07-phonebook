import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./tasksSlice";
import { filterReducer } from "./filterReduser";

export const store = configureStore({
    reducer: {
        contacts : contactsReduser,
        filter: filterReducer,
    }
})


