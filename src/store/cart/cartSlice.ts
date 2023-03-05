import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";

type CartSlice = {
  isLoading: boolean;
  products: IProduct[];
  totalCount: number;
  totalPrice: number;
};

const initialState: CartSlice = {
  isLoading: false,
  products: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    // получаем товары корзины с бека
    setCartProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
});

// экспортируем экшены
export const { setIsLoading, setCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
