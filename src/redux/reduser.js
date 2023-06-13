import { combineReducers } from 'redux';
import { contactsReducer } from './contactsReduser';

import { filterReducer } from './filterReduser';


//---------------before-----------------
// export const reducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

//---------------after-------------------
export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

