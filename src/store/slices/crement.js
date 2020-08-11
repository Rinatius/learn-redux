import { createSlice } from '@reduxjs/toolkit'

const crementSlice = createSlice({
  name: 'crement',
  initialState: 0,
  reducers: {
    crement(state, action) {
      return state + action.payload
    }
  }
})

export const { crement } = crementSlice.actions

export default crementSlice.reducer