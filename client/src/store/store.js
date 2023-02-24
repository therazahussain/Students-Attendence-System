import { configureStore } from '@reduxjs/toolkit'
import students from "./index.js"

export const store = configureStore({
  reducer: { students },
})