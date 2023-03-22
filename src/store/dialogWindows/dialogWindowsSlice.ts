import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DialogWindowsState = {
  isOpenAuth: boolean
  isOpenRegister: boolean
  isOpenMenu: boolean
  isOpenCart: boolean
  isOpenMakeOrder: boolean
}

const initialState: DialogWindowsState = {
  isOpenAuth: false,
  isOpenRegister: false,
  isOpenMenu: false,
  isOpenCart: false,
  isOpenMakeOrder: false,
}

const dialogWindowsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setIsOpenAuth(state, action: PayloadAction<boolean>) {
      state.isOpenAuth = action.payload
    },
    setIsOpenRegister(state, action: PayloadAction<boolean>) {
      state.isOpenRegister = action.payload
    },
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
export const {
  setIsOpenAuth,
  setIsOpenRegister,
  setIsOpenMenu,
  setIsOpenCart,
  setIsOpenMakeOrder,
} = dialogWindowsSlice.actions

export default dialogWindowsSlice.reducer
