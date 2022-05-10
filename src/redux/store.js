import { configureStore, combineReducers } from '@reduxjs/toolkit'
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
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart'
import favReducer from './favorite'
import authReducer from './auth'
import recentReducer from './views'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer, favorite: favReducer, recent: recentReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store);