import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/types/IProduct'
import { PRODUCTS } from '../mock/products'

type ProductState = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: ProductState = {
  isLoading: false,
  products: PRODUCTS,
}

const productSlice = createSlice({
  name: 'product',
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

export default productSlice.reducer
