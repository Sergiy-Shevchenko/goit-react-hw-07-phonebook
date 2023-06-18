import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.getIsLoading;
export const selectFilter = state => state.filter.filter;
export const selectError = state => state.contacts.error;

export const visibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const nopmalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nopmalizedFilter)
    );
  }
);
