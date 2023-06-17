import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./tasksSlice";

export const store = configureStore({
    reducer: {
        contacts : contactsReduser
    }
})


