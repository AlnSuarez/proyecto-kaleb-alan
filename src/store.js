import { configureStore } from '@reduxjs/toolkit';
import { pomodoroConfigSlice } from './pomodoroConfigSlice'

export default configureStore({
  reducer: { 
    pomodoroConfig: pomodoroConfigSlice,
  },
})