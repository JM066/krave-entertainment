import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isMobile } from 'react-device-detect'
export interface IProps {
  id: number
  title: string
  url: string
}
const initialState = {
  id: 1,
  title: '',
  url: '',
}

export const videoSlice = createSlice({
  name: 'videoSlice',
  initialState,
  reducers: {
    createBlog: (state, action: PayloadAction<IProps>) => {
      state = action.payload
    },
  },
})

// each case under reducers becomes an action
export const { createBlog } = videoSlice.actions

export default videoSlice.reducer
