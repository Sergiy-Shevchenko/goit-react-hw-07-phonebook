import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648db88a2de8d0ea11e826bf.mockapi.io';

export const fethcContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', {name, number});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
'contacts/deleteContact',
async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);        ;
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)





//https://648db52b2de8d0ea11e82368.mockapi.io/contacts/:endpoint

//---------------------------------------------------------------------
// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, thunkAPI) => {
//             try {
//                 const response = await axios.get('/contacts');
//                 return response.data;
//             } catch(error) {
//                 return thunkAPI.rejectWithValue(error.message)
//             }
//         }
// )

//---------------------------conspect-----------------------
// axios.defaults.baseURL = 'https://6488d29c0e2469c038fe6b72.mockapi.io';

// export const fetchContacrs  = createAsyncThunk(
// 'contacts/fetchAll',
// async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('/contacts');
//         return response.data;
//     } catch(error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// }
// )

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (name, number, thunkAPI) => {
//         try {
//             const response = await axios.user('/contacts', {name, number});
//             return response.data;
//             } catch(error) {
//                 return thunkAPI.rejectWithValue(error.message)
//             }
// }
// )

// export const deleteContact = createAsyncThunk(
// 'contacts/deleteContact',
// async (contactId, thunkAPI) => {
//     try {
//         const response = await axios.delete(`/contacts/${contactId}`);        ;
//         return response.data;
//     } catch(error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// }
// )

// export const filterContacts = createAsyncThunk(
//     'contacts/filterContact',
//     async (contact, contactId) => {
//         try {
//             const response = await axios.filter(`/contacts/${contact.id}}`, {
//                 filter: !contact.filter,
//             })
//         } catch(error) {
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// );
