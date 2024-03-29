import { configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './contacts/filtersSlice';
import authReducer from './auth/slise';

const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, authReducer.authReducer),
      filters: filtersReducer.filtersReducer,
      contacts: contactsReducer.contactsReducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
