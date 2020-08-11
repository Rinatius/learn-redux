import { createSlice } from '@reduxjs/toolkit'

const storageSlice = createSlice({
  name: 'storage',
  initialState: [],
  reducers: {
    store(state, action) {
      state.push(action.payload)
    }
  }
})

export const { store } = storageSlice.actions

export default storageSlice.reducer