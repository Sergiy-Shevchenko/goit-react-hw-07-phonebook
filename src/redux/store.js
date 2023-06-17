import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./tasksSlice";

export const store = configureStore({
    reducer: {
        contacts : contactsReduser
    }
})

















// import { configureStore } from "@reduxjs/toolkit"

// import { reducer } from './reduser';




// export const store = configureStore({
//     reducer,
//     // middleware: [customMiddleware]
// })


