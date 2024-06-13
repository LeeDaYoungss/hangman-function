import { configureStore } from '@reduxjs/toolkit'
import letterReducer from './LetterSlice';

export default configureStore({
  reducer: {
    letter: letterReducer
  }
})