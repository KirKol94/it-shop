import { AppDispatch } from "../store";
import { $api } from "../../api/axiosInstanse";
import { setProducts, setIsLoading } from "./productSlice";
import { IProduct } from "../../types/IProduct";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await $api.get<IProduct[]>("/categories");
    dispatch(setProducts(data));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setIsLoading(false));
  }
};
