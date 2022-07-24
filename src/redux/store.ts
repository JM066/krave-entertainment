import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mobileReducer from './reducer/videoSlice'
import { videoApi } from './api/videoApi'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducers = combineReducers({
  mobileReducer: mobileReducer,
  [videoApi.reducerPath]: videoApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([videoApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
