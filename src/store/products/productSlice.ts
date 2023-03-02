import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";

type ProductState = {
  isLoading: boolean;
  products: IProduct[];
};

const initialState: ProductState = {
  isLoading: false,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    // получаем товары с бека
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
});

// экспортируем экшены
export const { setIsLoading, setProducts } = productSlice.actions;

export default productSlice.reducer;
