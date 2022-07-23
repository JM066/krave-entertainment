import { createSlice } from '@reduxjs/toolkit'
import { isMobile } from 'react-device-detect'

const initialState = {
  isMobile: isMobile,
}

export const mainSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload
    },
  },
})

// each case under reducers becomes an action
export const { setIsMobile } = mainSlice.actions

export default mainSlice.reducer
