import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), contactsApi.middleware],
    // getDefaultMiddleware().concat(contactsApi.middleware),
});




// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactsReducer } from './contacts/contactsSlice';
// import { filterReducer } from './filter/filterSlice';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const reducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const persReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
