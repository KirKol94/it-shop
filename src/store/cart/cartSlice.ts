import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types/IProduct'

type CartSlice = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: CartSlice = {
  isLoading: false,
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    // получаем товары корзины с бека
    setCartProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
    },

    // Добавляем товар в корзину
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload)
      console.log('товар добавлен')
    },

    // Удалить товар из корзины
    deleteProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload)
      console.log('товар удалён')
    },
  },
})

// экспортируем экшены
export const { setIsLoading, setCartProducts, addProduct, deleteProduct } =
  cartSlice.actions

export default cartSlice.reducer
