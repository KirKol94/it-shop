import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '@/types/ICategory'

type CategoryState = {
  isLoading: boolean
  categories: ICategory[]
}

const initialState: CategoryState = {
  isLoading: false,
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    // получаем категории с бека
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload
    },
  },
})

// экспортируем экшены
export default categorySlice.reducer
