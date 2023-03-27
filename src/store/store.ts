import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categorySlice from './categories/categorySlice'
import productSlice from './products/productSlice'
import cartSlice from './cart/cartSlice'
import headerSlice from '@/store/header/headerSlice'
import recommendSlice from '@/store/recommended/recommendedSlice'
import dialogsWindowsSlice from '@/store/dialogWindows/dialogWindowsSlice'

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
  cart: cartSlice,
  header: headerSlice,
  recommended: recommendSlice,
  dialogs: dialogsWindowsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
