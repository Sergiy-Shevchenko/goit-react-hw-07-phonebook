import { createReducer} from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import { CONTACT_ADD} from './types';
// import { addContact} from './action';
import { deleteContact } from './action';

const initialState = [];


//---------------before-----------------
// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CONTACT_ADD:
//       return [...state, action.payload];

//     case CONTACT_DELETE:
//       return state.filter(({ id }) => id !== action.payload);

//     default:
//       return state;
//   }
// };

//---------------after-step-1-----------------
// export const contactsReducer = createReducer(initialState, {
//   [CONTACT_ADD]: (state, {payload}) => {
//     return [...state, payload]
//   },
// [CONTACT_DELETE]: (state, {payload}) => {
//   return state.filter(({ id }) => id !== payload);
// }
// })

//---------------after-step-2-----------------
export const contactsReducer = createReducer(initialState, {
  [CONTACT_ADD]: (state, {payload}) => {
    return [...state, payload]
  },
[deleteContact]: (state, {payload}) => {
  return state.filter(({ id }) => id !== payload);
}
})

//---------------slice------------------------

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     CONTACT_ADD: (state, {payload}) => {
//       return [...state, payload]
//     },
//   deleteContact: (state, {payload}) => {
//     return state.filter(({ id }) => id !== payload);
//   }
//   }
// })

// export const contactsReducer = contactsSlice.reducer

