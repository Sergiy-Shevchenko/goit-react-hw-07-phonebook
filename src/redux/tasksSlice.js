import { createSlice } from "@reduxjs/toolkit";
import { fethcContacts, addContact, deleteContact } from "./operation";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
      isLoading: false,
      error: null,
    },
    
    extraReducers: {
        [fethcContacts.pending](state) {
            state.isLoading = true;
        },
    
        [fethcContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
    
        [fethcContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContact.rejected](state, actoin) {
            state.isLoading = false;
            state.error = actoin.payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
            contact => contact.id === action.payload.id)
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
  
    },
  }) 

  export const contactsReduser = contactsSlice.reducer;