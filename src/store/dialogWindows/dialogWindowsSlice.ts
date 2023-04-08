import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DialogWindowsState = {
  isOpenMenu: boolean
  isOpenCart: boolean
  isOpenMakeOrder: boolean
}

const initialState: DialogWindowsState = {
  isOpenMenu: false,
  isOpenCart: false,
  isOpenMakeOrder: false,
}

const dialogWindowsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setIsOpenMenu(state, action: PayloadAction<boolean>) {
      state.isOpenMenu = action.payload
    },
    setIsOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpenCart = action.payload
    },
    setIsOpenMakeOrder(state, action: PayloadAction<boolean>) {
      state.isOpenMakeOrder = action.payload
    },
  },
})

// экспортируем экшены
export const { setIsOpenMenu, setIsOpenCart, setIsOpenMakeOrder } =
  dialogWindowsSlice.actions

export default dialogWindowsSlice.reducer
