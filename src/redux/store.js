// import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { reducer } from './reduser';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancher = devToolsEnhancer();
//---------------before-----------------
// export const store = createStore(reducer, enhancher);

//---------------after-------------------
export const store = configureStore({ reducer: persistedReducer, enhancher });

export const persistor = persistStore(store);
console.log(store.getState());

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }
