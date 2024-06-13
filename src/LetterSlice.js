import { createSlice } from '@reduxjs/toolkit'

export const letterSlice = createSlice({
  name: 'guessedLetters',
  initialState: {
    letters: []
  },
  reducers: {
    addLetters: (state,action) => {
      const guessedLetter = action.payload.toLowerCase();

      state.letters.push(guessedLetter);
    },
    clearLetters:(state)=>{
      state.letters = [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addLetters, clearLetters } = letterSlice.actions

export default letterSlice.reducer