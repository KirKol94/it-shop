import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HeaderSlice = {
  height: number
}

const initialState: HeaderSlice = {
  height: 0,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    // при изменении высоты хедера
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload
    },
  },
})

// экспортируем экшены
export const { setHeight } = headerSlice.actions

export default headerSlice.reducer
