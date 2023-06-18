import { createSlice } from '@reduxjs/toolkit';
import { fethcContacts, addContact, deleteContact } from './operation';

const initialState = {
  // contacts: {
  items: [],
  isLoading: false,
  error: null,
  // }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fethcContacts.pending](state) {
      state.isLoading = true;
    },

    [fethcContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },

    [fethcContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
