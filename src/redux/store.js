import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './Cart/reducer'
import gamesReducer from './games/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
  },
})