import { createSlice } from '@reduxjs/toolkit'

export const pomodoroConfigSlice = createSlice({
  name: 'pomodoroConfig',
  initialState: {
    value: {
      minutesFocus: 25,
      minutesBreakLarge: 15,
      minutesBreak: 5,
      longBreakInterval: 4,
    },
  },
  reducers: {
    setMinutesFocus: (state) => {
      state.minutesFocus = state;
    },
    setMinutesBreakLarge: (state) => {
      state.minutesBreakLarge = state;
    },
    setMinutesBreak: (state) => {
      state.minutesBreak = state;
    },
    setLongBreakInterval: (state) => {
      state.longBreakInterval = state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMinutesFocus, setMinutesBreakLarge, setMinutesBreak, setLongBreakInterval } = pomodoroConfigSlice.actions

export default pomodoroConfigSlice.reducer