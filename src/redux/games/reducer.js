import { createSlice } from '@reduxjs/toolkit'

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    },
  }
})

export const { setCurrentGame } = gamesSlice.actions

export default gamesSlice.reducer