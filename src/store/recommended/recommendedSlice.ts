import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types/IProduct'

type recommendedState = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: recommendedState = {
  isLoading: false,
  products: [
    {
      id: '1',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'Футболка на плечиках',
      description: 'Её позволит только айтишник',
      price: 1399,
    },
    {
      id: '2',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
      name: 'Футболка с рукой',
      description: 'Рука, плечики, футболка',
      price: 1299,
    },
    {
      id: '3',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086234758331252776/image.png',
      name: 'Рубашка с галстуком',
      description:
        'Очень крутая рубашка белого цвета для очень успешных людей, которые знают толк в хороших вещах и имеют потрясающий вкус, а ещё она доступна каждому  Купи - и будь пиздат!',
      price: 5999,
    },
    {
      id: '4',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'Футболка на плечиках',
      description: 'Её позволит только айтишник',
      price: 1399,
    },
  ],
}

const recommendedSlice = createSlice({
  name: 'recommended',
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

// экспортируем экшены
export const { setIsLoading, setProducts } = recommendedSlice.actions

export default recommendedSlice.reducer
