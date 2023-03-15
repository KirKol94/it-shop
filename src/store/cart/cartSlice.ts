import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from '@/types/ICartProduct'

type CartSlice = {
  items: ICartProduct[]
  discountSize: number
  totalPriceWithDiscount: number
}

const initialState: CartSlice = {
  items: [],
  discountSize: 0,
  totalPriceWithDiscount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // получаем товары корзины с бека
    // setCartProducts(state, action: PayloadAction<IProduct[]>) {
    //   state.products = action.payload
    // },

    // Добавляем товар в корзину
    addProduct(state, action: PayloadAction<ICartProduct>) {
      state.items.push(action.payload)
      console.log(state.items)
    },

    // Удалить товар из корзины по его id
    deleteProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    // изменить размер скидки
    changeDiscountSize(state, action: PayloadAction<number>) {
      state.discountSize = action.payload
    },

    // увеличиваем количество выборанного товара в корзине
    incrementCartItemCount(state, action: PayloadAction<string>) {
      state.items.map(item => {
        if (item.id === action.payload) {
          item.count++
        }

        return item
      })
    },

    // уменьшаем количество выборанного товара в корзине
    decrementCartItemCount(state, action: PayloadAction<string>) {
      state.items.map(item => {
        if (item.id === action.payload) {
          item.count--
        }

        return item
      })
    },
  },
})

// экспортируем экшены
export const {
  addProduct,
  deleteProduct,
  incrementCartItemCount,
  decrementCartItemCount,
  changeDiscountSize,
} = cartSlice.actions

export default cartSlice.reducer
