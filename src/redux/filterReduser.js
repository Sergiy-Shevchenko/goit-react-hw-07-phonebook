






























//--------------------------------6-d-z---------------------------------------------------------

// //import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// // import { CONTACT_FILTER } from './types';
// // import { filterContacts } from './action';

// const initialState = {
//   id: '',
// };
// //---------------before-----------------
// // export const filterReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case CONTACT_FILTER:
// //       return {
// //         ...state,
// //         id: action.payload,
// //       };
// //     default:
// //       return state;
// //   }
// // };
// //---------------after-step-1-----------------
// // export const filterReducer = createReducer(initialState, {
// //   [CONTACT_FILTER]: (state, {payload}) => {
// //     return {state, id: payload}
// //   }
// // })
// //---------------after-step-2-----------------
// // export const filterReducer = createReducer(initialState, {
// //   [filterContacts]: (state, {payload}) => {
// //     return {state, id: payload}
// //   }
// // })

// //---------------slice------------------------

// const filterSlice = createSlice({
//   name: 'contact',
//   initialState,
//   reducers: {
//     filterContacts: (state, {payload}) => {
//     return {state, id: payload}
//   }
//   }
// })

// export const filterReducer = filterSlice.reducer

// export const {filterContacts} = filterSlice.actions