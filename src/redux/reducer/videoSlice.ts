import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isMobile } from 'react-device-detect'

export interface IProps {
  id: number
  title: string
  url: string
}
interface VideoState {
  selectedVideoBlog?: IProps | null
}
const initialState: VideoState = {
  selectedVideoBlog: null,
}

export const videoSlice = createSlice({
  name: 'videoSlice',
  initialState,
  reducers: {
    selectVideoBlog: (state, action: PayloadAction<IProps>) => {
      const { payload } = action
      state.selectedVideoBlog = payload
    },
  },
})

export const { selectVideoBlog } = videoSlice.actions

export default videoSlice.reducer
