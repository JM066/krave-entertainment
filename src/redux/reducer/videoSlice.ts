import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isMobile } from 'react-device-detect'
export interface IProps {
  isMobile: boolean
}
const initialState = {
  isMobile: isMobile,
}

export const mobileSlice = createSlice({
  name: 'mobileSlice',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<IProps>) => {
      state.isMobile = action.payload.isMobile
    },
  },
})

// each case under reducers becomes an action
export const { setIsMobile } = mobileSlice.actions

export default mobileSlice.reducer
