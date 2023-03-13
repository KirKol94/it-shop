import { AppDispatch } from '@/store/store'
import { $api } from '@/api/axiosInstanse'
import { setCartProducts, setIsLoading } from './cartSlice'
import { IProduct } from '@/types/IProduct'

export const fetchProductsOfCart = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true))
  try {
    const { data } = await $api.get<IProduct[]>('/categories')
    dispatch(setCartProducts(data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(setIsLoading(false))
  }
}
