// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './phonebook/reducers';
import logger from 'redux-logger';
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

// const store = createStore(contactReducer, composeWithDevTools());

// export default store;

// -------toolkit---------

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

export const persistor = persistStore(store);
