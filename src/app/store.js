import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { productsApi } from '../services/productsApi'
import { imdbApi } from '../services/imdbApi'
import { pokemonApi } from '../services/pokemon'


export const store = configureStore({
  reducer: {
   [pokemonApi.reducerPath]:pokemonApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [imdbApi.reducerPath]:imdbApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        pokemonApi.middleware,
        productsApi.middleware,
        imdbApi.middleware
    ),
})


setupListeners(store.dispatch)