import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categorySlice";
import productSlice from "./products/productSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
