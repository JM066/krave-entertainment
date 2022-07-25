import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IProps {
  id: number
  title: string
  url: string
  createdAt: string
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
