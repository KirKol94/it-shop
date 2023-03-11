import { AppDispatch } from '../store'
import { setCategories, setIsLoading } from './categorySlice'
import { $api } from '../../api/axiosInstanse'
import { ICategory } from '../../types/ICategory'

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true))
  try {
    const { data } = await $api.get<ICategory[]>('/categories')
    dispatch(setCategories(data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(setIsLoading(false))
  }
}
