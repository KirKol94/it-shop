import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/types/IProduct'
import { PRODUCTS } from '../mock/products'

type recommendedState = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: recommendedState = {
  isLoading: false,
  products: PRODUCTS,
}

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    // получаем товары с бека
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
    },
  },
})

export default recommendedSlice.reducer
